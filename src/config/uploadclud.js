import cloudinary from 'cloudinary';
import multer from 'multer'
import 'fs'
import pkg from 'multer-storage-cloudinary';
const {CloudinaryStorage} = pkg;
// import { file } from 'tmp';
cloudinary.config({
    cloud_name: 'djf1tigyw', 
    api_key: '117152564788648', 
    api_secret: 'OvWS3KxSzfQ-E8L5LA1GgQfd9Sc'
}); 

// export function upds (req, res, next){
   
//     const file = req.file
//     console.log(file)
//     const tagname=req.files.FormFieldName 
//     cloudinary.v2.uploader.upload(file, { tags:tagname }, function (err, image) {
//         console.log();
//         console.log("** File Upload");
//         if (err) { console.warn(err); }
//         console.log("* public_id for the uploaded image is generated by Cloudinary's service.");
//         console.log("* " + image.public_id);
//         console.log("* " + image.url);
//         waitForAllUploads("pizza", err, image);
//       });
// }
// export {upds}
//cloudinary.v2.uploader.upload(req.file, function(error, result) { console.log(result);console.log(error) });
const storage = CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'demo',
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
    });
export  const parser = multer({ storage: storage , onError : function(err, next) {
    console.log('error', err);
    next(err);
  }, });