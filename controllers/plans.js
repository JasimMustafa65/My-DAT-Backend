const { Plans } = require("../sequelize/models/index");

const addPlan = async (req, res) => {
    try {
        const { type, details } = req.body;
        await Plans.create({ type, details });
        res.status(200).json({ message: "Plan added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updatePlan = async (req, res) => {
    try {
        const { id } = req.params;
        const { type, details } = req.body;

        const existPlan = await Plans.findByPk(id);
        if (!existPlan) {
            return res.status(404).json({ message: "Plan not found" });
        }

        await existPlan.update({ type, details });
        res.status(200).json({ message: "Plan updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletePlan = async (req, res) => {
    try {
        const { id } = req.params;

        const existPlan = await Plans.findByPk(id);
        if (!existPlan) {
            return res.status(400).json({ message: "Plan does not exist" });
        }

        await existPlan.destroy();
        res.status(200).json({ message: "Plan deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPlan = async (req, res) => {
    try {
        const data = await Plans.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPlanById = async (req, res) => {
    try {
        const { id } = req.params;
        const plan = await Plans.findByPk(id);

        if (!plan) {
            return res.status(400).json({ message: `Plan with id ${id} does not exist` });
        }

        res.status(200).json(plan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {getPlanById, getPlan, deletePlan, updatePlan, addPlan}