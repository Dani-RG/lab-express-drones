const mongoose = require('mongoose');
const Drone = require('../models/Drone.model')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  const seedDB = async (drones) => {
    try {
        const dbConnection = await mongoose.connect(
            "mongodb://localhost/lab-express-drones"
        )
        console.log('Connected to:', dbConnection.connections[0].name)
        const allDrones = await Drone.create(drones)
        console.log("all the drones", allDrones);
    }
    catch (error) {
        console.log('An error occured')
    }
    finally {
        await mongoose.connection.close()
    }
}

seedDB(drones)