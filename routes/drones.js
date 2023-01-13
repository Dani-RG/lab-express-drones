const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
  try {
    const allDrones = await Drone.find()
    res.render('drones/list', { dronesArray: allDrones });
  } catch (error) {
    next(error)
  }
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form');
});

router.post('/drones/create', async (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  try {
      const createdDrone = await Drone.create({ name, propellers, maxSpeed });
      res.redirect('/drones');
  }
  catch (error) {
      next(error)
      res.redirect('/drones');
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
