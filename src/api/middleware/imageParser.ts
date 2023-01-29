import multer from 'multer';
import path from 'path';
// Multer config
const imageParser = multer({
  storage: multer.diskStorage({
    filename: function (req, file, cb) {
      cb(null, file.originalname + '.' + path.extname(file.originalname));
    },
  }),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      //@ts-ignore
      cb(new Error('File type is not supported'), false);
      return;
    }
    cb(null, true);
  },
});

export default imageParser;
