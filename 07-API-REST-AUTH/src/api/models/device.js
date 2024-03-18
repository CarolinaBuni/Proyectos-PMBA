const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const deviceSchema = new Schema(
     {
          title: { type: String },
          Location: { type: String },
          description: { type: String },
          status: { type: String },
          // owner: [{ type: mongoose.Types.ObjectId, ref: "user" }],
          tipe: { type: String, enum: [ "Smartwatch", "Smartphone", "Laptop", "Tablet", "SmartTV", "SmartHomeDevice", "SmartThermostat", "SmartLightbulb", "SmartPlug", "SmartLock", "SmartSpeaker", "SmartCamera", "SmartFridge", "SmartWasher", "SmartDryer", "SmartOven", "SmartMicrowave", "SmartCoffeeMaker", "SmartBlender", "SmartVacuum", "SmartGarageDoorOpener", "SmartSmokeDetector", "SmartCarbonMonoxideDetector", "SmartWaterLeakDetector", "SmartBabyMonitor", "SmartPetFeeder", "SmartFitnessTracker" ] },
     },
     {
          timestamps: true,
          collection: "device"
     }
);

const Device = mongoose.model( "device", deviceSchema, "device" );
module.exports = Device;