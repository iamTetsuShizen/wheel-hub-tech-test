Here you have all the examples needed to test the POST API endpoint.

Be wary that the endpoint doesn't have the same validation than the front and that could corrupt the data.
 + Username should be between 5 to 24 characters and not start with a number.
 + Password should be between 8 to 25 characters and contain a number and a Uppercase.
 + confirmPassword should be the same as the password.
 + The clue should not occupy more than 60 characters.

These are the front-end validations used in test_frontend_main/helpers/
The good thing about having them in a separate file is that they are decoupled from the front, and could even be used here in the back since they
are pretty simple functions that recieves and sends primitive values.