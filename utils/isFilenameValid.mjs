const specialCharacter = /[!@#$%^&*(),?":{}|<>]/;

export const isFilenameValid = (filename) => {
    return !specialCharacter.test(filename);
};
