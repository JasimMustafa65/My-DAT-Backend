const express = require("express")
const { addPlan,deletePlan,updatePlan,getPlan,getPlanById } =require( "../controllers/plans.js");


const router = express.Router();

router.post("/addplan", addPlan);
router.delete("/deletePlan/:id", deletePlan);
router.put("/updatePlan/:id", updatePlan);
router.get("/getPlan", getPlan);
router.get("/getPlan/:id", getPlanById);

module.exports = router;
