const multer = require('multer');
const { CloudinaryStorage } = require( 'multer-storage-cloudinary' );
const cloudinary = require('cloudinary').v2;

const storage = new CloudinaryStorage({
     cloudinary: cloudinary,
     params: {
          folder: "events",
          allowedFormats: ["jps", "png", "jpeg", "gif", "webp", "avif"]
     }
});

const upload = multer({ storage });
module.exports = upload;