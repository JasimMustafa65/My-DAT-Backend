const express = require("express")
const { registration,login,subscribePlan} =require("../controllers/user.js")

const router = express.Router();

router.post("/registration", registration);
router.post("/login", login);
router.post('/user-plan-subscription', subscribePlan);

module.exports = router;
