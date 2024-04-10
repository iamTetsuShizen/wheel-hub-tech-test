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
            message: "errorPasswordLength"
        };
    }

    if(!containsNumber) {
        return {
            isError: true,
            message: "errorPasswordMissingNumber"
        };
    }

    if(!containsUppercase) {
        return {
            isError: true,
            message: "errorPasswordMissingUppercase"
        };
    }

    return {
        isError: false,
        message: ""
    };
}

export default validatePassword;