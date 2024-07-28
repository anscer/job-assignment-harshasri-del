const State = require("../models/State");

// Create a new state
const createState = async (req, res) => {
  const { name, description, status } = req.body;

  try {
    const state = new State({
      name,
      description,
      status,
      createdBy: req.user.id,
    });
    await state.save();
    res.status(201).json(state);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all states
const getStates = async (req, res) => {
  try {
    const states = await State.find();
    res.status(200).json(states);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a state
const updateState = async (req, res) => {
  try {
    const state = await State.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!state) return res.status(404).json({ error: "State not found" });
    res.status(200).json(state);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a state
const deleteState = async (req, res) => {
  try {
    const state = await State.findByIdAndDelete(req.params.id);
    if (!state) return res.status(404).json({ error: "State not found" });
    res.status(204).send("successfully deleted!!" );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createState, getStates, updateState, deleteState };
