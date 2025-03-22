const { Plans, User, UserPlanRelationship }=require( "../sequelize/models/index");

const registration = async (req, res) => {
    try {
        const { username, email,organizationName,industry, phone, organizationSize, password, confirmPassword } = req.body;

        const existsUser = await User.findOne({where:{email:email}});
        if (existsUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser= await User.create(req.body);
        res.status(201).json({ id:newUser.id,message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const existsUser = await User.findOne({ where: { username } });
        if (!existsUser) {
            return res.status(400).json({ message: "User does not exist!" });
        }

        if (existsUser.password !== password) {
            return res.status(400).json({ message: "Password is incorrect!" });
        }

        const userData = await User.findOne({
            where: { username },
            include: [
                {
                    model: UserPlanRelationship,
                    include: [{ model: Plans }]
                }
            ]
        });

        if (!userData) {
            return res.status(500).json({ message: "User found but plan data missing!" });
        }

        return res.status(200).json({
            message: "Login successful!",
            userData
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const subscribePlan = async (req, res) => {
    try {
        const { userId, planId } = req.body;

        const alreadySubscribed = await UserPlanRelationship.findOne({
            where: { userId, planId }
        });

        if (alreadySubscribed) {
            return res.status(400).json({ message: "Already subscribed to this plan" });
        }

        await UserPlanRelationship.create({ userId, planId });

        res.status(200).json({ message: "Plan subscribed successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {subscribePlan, login, registration}