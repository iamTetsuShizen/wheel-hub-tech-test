import validateUsername from './usernameValidator';

describe('validateUsername', () => {
  it('should return error if the username length is less than 5 characters', () => {
    const result = validateUsername('test');
    expect(result.isError).toBe(true);
    expect(result.message).toBe('errorUsernameLength');
  });

  it('should return error if the username length is greater than 25 characters', () => {
    const result = validateUsername('usernamesolongthatshouldcauseanerroronthetest');
    expect(result.isError).toBe(true);
    expect(result.message).toBe('errorUsernameLength');
  });

  it('should return error if the username starts with a number', () => {
    const result = validateUsername('123user');
    expect(result.isError).toBe(true);
    expect(result.message).toBe('errorUsernameStartWithNumber');
  });

  it('should return no error if the username meets all criteria', () => {
    const result = validateUsername('validUser');
    expect(result.isError).toBe(false);
    expect(result.message).toBe('');
  });
});