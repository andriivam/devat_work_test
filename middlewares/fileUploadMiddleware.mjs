import multer, { diskStorage } from 'multer';

export const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Append a timestamp to the file name
    }
});

export const fileUploadMiddleware = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // Limit file size to 5MB
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('application/pdf')) {
            cb(null, true);
        } else {
            cb(new Error('File format not supported (only images allowed)'));
        }
    }
});