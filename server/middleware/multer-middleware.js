
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/');
      // cb(null, path.join(__dirname, "public/uploads"));
  },
  filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
      cb(null, true);
  } else {
      cb(new Error('Only image files are allowed!'), false);
  }
};

// Initialize multer
const upload = multer({ storage, fileFilter });

module.exports = upload;