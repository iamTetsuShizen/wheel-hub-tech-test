import ErrorInterface  from '../types/error'


const validateUsername = (username: string) : ErrorInterface => {
    const MIN_LENGHT = 5;
    const MAX_LENGHT = 25;

    const isCorrectLength = username.length >= MIN_LENGHT && username.length < MAX_LENGHT;
    const itStartsWithLetter = /^[^0-9]/.test(username);

    if (!isCorrectLength) {
        return {
            isError: true,
            message: "errorUsernameLength"
        };
    }

    if (!itStartsWithLetter) {
        return {
            isError: true,
            message: "errorUsernameStartWithNumber"
        };
    }

    return {
        isError: false,
        message: ""
    };
}

export default validateUsername;