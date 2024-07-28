const express = require("express");
const {
  createState,
  getStates,
  updateState,
  deleteState,
} = require("../controllers/stateController");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();
router.use(authenticate);

router.post("/", createState);
router.get("/", getStates);
router.put("/:id", updateState);
router.delete("/:id", deleteState);

module.exports = { stateRoutes: router };
