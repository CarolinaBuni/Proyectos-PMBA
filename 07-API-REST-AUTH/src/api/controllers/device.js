const Device = require( "../models/device" );

//* GET Devices
const getDevices = async (req, res, next) => {
     try {
          const devices = await Device.find();
          return res.status(200).json(devices);
     } catch (error) {
          return res.status(400).json(error);
     }
};


//* POST Devices
const postDevices = async (req, res, next) => {
     try {
          const device = new Device(req.body);

          const deviceSaved = await device.save();
          return res.status(201).json(deviceSaved);
     } catch (error) {
          return res.status(400).json(error);
     }
};


//* PUT Devices
const putDevices = async (req, res, next) => {
     try {
          const { id } = req.params;
          const newDevice = new Device(req.body);

          newDevice._id = id;
          const deviceUpdated = await Device.findByIdAndUpdate(id, newDevice, { new: true });
          return res.status(200).json(deviceUpdated);
     } catch (error) {
          return res.status(400).json(error);
          
     }
};


//* DELETE Devices
const deleteDevices = async (req, res, next) => {
     try {
          const { id } = req.params;

          const deviceDeleted = await Device.findByIdAndDelete(id);
          return res.status(200).json(deviceDeleted);
     } catch (error) {
          return res.status(400).json(error);
     }
};

module.exports = { getDevices, postDevices, putDevices, deleteDevices };