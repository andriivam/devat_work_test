import { isFilenameValid } from "../utils/isFilenameValid.mjs";

export const uploadController = (req, res) => {
    try {
        // File name validation
        const isValidFilename = isFilenameValid(req.file.filename);
        if (!isValidFilename) {
            throw new Error('File name contains special characters. Please use the right words in the file name.');
        }

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
};
