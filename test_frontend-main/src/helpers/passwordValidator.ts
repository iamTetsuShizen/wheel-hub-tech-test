import ErrorInterface  from '../types/error'

const validatePassword = (password: string) : ErrorInterface => {
    const MIN_LENGHT = 8;
    const MAX_LENGHT = 24;

    const isCorrectLength = password.length >= MIN_LENGHT && password.length < MAX_LENGHT;
    const containsNumber = /\d/.test(password);
    const containsUppercase = /[A-Z]/.test(password);

    if (!isCorrectLength) {
        return {
            isError: true,
            message: "The password has an incorrect length (from 8 to 24 letters)."
        };
    }

    if(!containsNumber) {
        return {
            isError: true,
            message: "The password has to have at least a number."
        };
    }

    if(!containsUppercase) {
        return {
            isError: true,
            message: "The password has to have at least a letter to be uppercase."
        };
    }

    return {
        isError: false,
        message: ""
    };
}

export default validatePassword;