import express from 'express';
import multer, { diskStorage } from 'multer';
const app = express();
const port = 3003;

// Set up the storage configuration for multer
const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Append a timestamp to the file name
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // Limit file size to 5MB
    },
    fileFilter: (req, file, cb) => {
        // File format validation
        if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('application/pdf')) {
            cb(null, true);
        } else {
            cb(new Error('File format not supported (only images allowed)'));
        }
    }
});

app.post('/upload', upload.single('file'), (req, res) => {

    try {
        // File name validation
        const specialCharacter = /[!@#$%^&*(),?":{}|<>]/;
        if (specialCharacter.test(req.file.filename)) {
            throw new Error('File name contains special characters. Please use the right words in the file name.');
        }

        // File size validation (handled by multer limits)

        res.json({
            message: 'File uploaded successfully',
            file: req.file
        });
    } catch (error) {
        res.status(400).json({
            message: 'File upload failed',
            error: error.message,
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});