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
else if (passwordLengthNum < 8) {
alert("enter more than 8 characters");
return null;
}
//conditional statement to see if password has less than 128 characters
else if (passwordLengthNum > 128 ) {
  alert("enter more than 128 characters");
  return null;
} else  console.log(length);
};

//password criteria function








const getPasswordCriteria = () => {
  return [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
};

const createRandomPassword = () => {
  return "kdUE28(@d0";
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

