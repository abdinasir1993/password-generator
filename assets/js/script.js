const generateBtn = document.querySelector("#generate");
//get password length function
const getPasswordLength = () => {
//variable that stores length of password
const Length = prompt( "what is the password length you desire");

console.log(Length);

// condition for password being a number

const passwordLengthNum = parseInt(length);
if (passwordLengthNum >= 8 && passwordLengthNum <=128) {
  return passwordLengthNum;  
} else alert ("enter only valid numbers");
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

