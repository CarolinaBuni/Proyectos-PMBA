const cloudinary = require('cloudinary').v2;

const deleteFile = (url) => {
     const imgSplited = url.split("/");
     const folderName = imgSplited.at(-2);
     const fieldName = imgSplited.at(-1).split(".")[0];

     const public_id = `${folderName}/${fieldName}`;

     cloudinary.uploader.destroy(public_id, () => {
          console.log("Evento eliminado");
     })
};

module.exports = { deleteFile };