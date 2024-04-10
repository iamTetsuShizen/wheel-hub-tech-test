import validatePassword from './passwordValidator';

describe('validatePassword', () => {
    it('should return error if the password length is less than 8 characters', () => {
        const result = validatePassword('pass');
        expect(result.isError).toBe(true);
        expect(result.message).toBe('errorPasswordLength');
    });

    it('should return error if the password length is greater than  24 characters', () => {
        const result = validatePassword('passwordpasswordpasswordpasswordpasswordpasswordpassword');
        expect(result.isError).toBe(true);
        expect(result.message).toBe('errorPasswordLength');
      });

    it('should return error if the password does not contain numbers', () => {
        const result = validatePassword('password');
        expect(result.isError).toBe(true);
        expect(result.message).toBe('errorPasswordMissingNumber');
    });

    it('should return error if the password does not contain any uppercase letters', () => {
        const result = validatePassword('password7');
        expect(result.isError).toBe(true);
        expect(result.message).toBe('errorPasswordMissingUppercase');
    });

});