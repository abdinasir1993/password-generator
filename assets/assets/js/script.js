var capitalLetters  = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'

];

var lowerCaseLetters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

var specialCharacters = [
  '@','(','~','!','@','#','$','%','^','&','*','_','-','+','=','`','|','\','(',')','{','}','[',']',':',';','"',''','<','>',',','.','?','/',')',
];

var arrayOfNumbers = [0,1,2,3,4,5,6,7,8,9,10];

function passwordChoices() {
var length = parseInt(
  prompt ('how many characters would you like?')


);
if (Number.isNaN(length)){
  alert ('password length has to be numbers');
  return null;
}
 if (length < 8) {
   alert('password has to be a minimum of 8 characters')
 }

 if (length > 128) {
   alert ('password length must less than 129 characters')
   return null;
 }

 varIncludeCapital = confirm ('click ok to include Capital capital letters.' );

 varIncludeNumbers = confirm ('click ok to include numbers.');
 
 varIncludeSpecialCharacters = confirm ('click ok to include Capital capital letters.' );
 
 varIncludeLowerCaseLetters = confirm ('click ok to include lowercase letters.' );

 if (
   IncludeCapital === false &&
   IncludeSpecialCharacters === false &&
   IncludeLowerCaseLetters === false &&
   varIncludeNumbers === false &&
   
   )

   {
     alert ('must use atleast one character option');
     return null;
   }

   var passwordOptions = {
   
    length: length,
    IncludeCapital: IncludeCapital,
    IncludeLowerCaseLetters: IncludeLowerCaseLetters,
    IncludeSpecialCharacters: IncludeSpecialCharacters,
    varIncludeNumbers: varIncludeNumbers,
   };
