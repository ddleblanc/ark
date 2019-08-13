const multer = require("multer");
const multerS3 = require('multer-s3');
const path = require("path");
const env = require("./env");
const s3 = require('./aws').s3;


const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'arkfile',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: function (request, file, cb) {
      // console.log(JSON.parse(request.body.meta));
      var newFileName = Date.now() + "-" + file.originalname;
      var fullPath = `username/filetype/` + newFileName;
      cb(null, fullPath);
    }
  })
}).array('file', 1);

module.exports = {
  upload: upload
};
