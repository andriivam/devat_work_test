import express from 'express';
import { uploadController } from './controllers/uploadController.mjs';
import { fileUploadMiddleware } from './middlewares/fileUploadMiddleware.mjs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.post('/upload', fileUploadMiddleware.single('file'), uploadController);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});