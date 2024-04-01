export const checkValidateData = (email,password) => {

const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email); //if it passes regex it passes true to isEmail inside it.

const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


if(!isEmail) return "Email ID is Not Valid."
if(!isPasswordValid) return "Password is Not Valid."

return null;
}
