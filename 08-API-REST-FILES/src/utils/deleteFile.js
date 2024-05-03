const cloudinary = require('cloudinary').v2;

const deleteFile = (imgUrl) => {

     const imgSplited = imgUrl.split("/");
     const folderName = imgSplited.at(-2);
     const fieldName = imgSplited.at(-1).split(".")[0];
     
     const public_id = `${folderName}/${fieldName}`;

     cloudinary.uploader.destroy(public_id, () => {
          console.log("Eliminado");
     });
};

module.exports = { deleteFile };