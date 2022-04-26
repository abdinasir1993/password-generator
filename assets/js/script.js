const generateBtn = document.querySelector("#generate");
//get password length function
const getPasswordLength = () => {
//variable that stores length of password
const length = prompt( "what is the password length you desire");


// condition for password being a number

const passwordLengthNum = parseInt(length);
//conditional statement to check if password is a number
if (Number.isNaN(passwordLengthNum)) {
  alert("enter number");
  return null;
} 
//conditional statement to check password has more than 8 characters
if (passwordLengthNum < 8) {
alert("enter more than 8 characters");
return null;
}
//conditional statement to see if password has less than 128 characters
else if (passwordLengthNum > 128 ) {
  alert("enter more than 128 characters");
  return null;
} else  return length;
};


//password criteria function



 const getPasswordCriteria = () => {
 //variable to store lower case
  const lowercase = confirm ("include lowercase in password?")
  //variable to store uppercase
 const uppercase = confirm ("include uppercase in password?")
 //variable to store numeric
 const numeric = confirm ("include numeric in password?")
 //variable to store special characters
 const specialCharacters = confirm ("include special characters in password?")
 
 // Variable to store the array of conditions

 //conditional statement for lowercase
 const getPasswordRequirements = [] ;
 if (lowercase) {
   getPasswordRequirements.push("abcdefghijklmnopqrstuvwxyz");
 }
//conditional statement for uppercase
 if (uppercase ) {
  getPasswordRequirements.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
 }
 // conditional statement for numeric
 if (numeric ) {
  getPasswordRequirements.push("0123456789");
 }
 // conditional statement for special characters
 if (specialCharacters ) {
  getPasswordRequirements.push("!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");
 }

  return getPasswordRequirements
};

const createRandomPassword = (passwordLength, passwordCriteria) => {
 const passwordArray = [];
 for (let i = 0; i < passwordLength; i += 1) {
 
 //choose categories from array

 const randCategoriesIndex = Math.floor(Math.random() * passwordCriteria.length);

 //get random categories

 const randCategories = passwordCriteria[randCategoriesIndex]

 //get random index

 const randIndex = Math.floor(Math.random() * passwordCriteria.length);

 // get random characters
 const randomCharacter = randCategories.charAt(randIndex)
 passwordArray.push(randomCharacter);

 }
 return passwordArray.join ("")
};


// main function to generate the random password
const generatePassword = () => {
  // get the password length
  
  const passwordLength = getPasswordLength(); 
  if (passwordLength) {

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();
  if (passwordCriteria.length === 0) {
    alert ("please choose on of the options")
    return null
  }
  else {

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
  }
}
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

