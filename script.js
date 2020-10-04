// Assignment Code
var numbers = "0123456789";
var special = "!@#$%^&*";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");

function getPasswordOptions(){
  var length = prompt("How long do you want your password?");

  if (length < 8 || length > 128){
      alert("PW must be between 8 and 28 characters");

      return;
  }
  
  var upChar = confirm("Do you want upper case letters?");
  var loChar = confirm("Do you want lower case letters?");
  var spChar = confirm("Do you want special characters?");
  var numChar = confirm("Do you want numbers?");


  var passwordOptions = {
    length: length,
    uppperCase: upChar,
    lowerCase: loChar,
    numbers: numChar,
    special: spChar

  }

return passwordOptions;

}

function getRandom(arr){
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

function pushChar(getPasswordOptions){
  var passwordOptions = getPasswordOptions;
  var results = "";

  if (passwordOptions.lower){
      results += lowerLetters;
  }
  if (passwordOptions.upper){
      results += upperLetters;
  }
  if (passwordOptions.numbers){
      results += numbers;
  }
  if (passwordOptions.special){
      results += special;
  }
  return results;
}

function generatePassword(){
  var result = "";
  var possibleChar = getPasswordOptions();
  var guaranteedChar = pushChar(possibleChar);

for (let i = 0, len = possibleChar.length, text = ""; i <len; i++){
  result += (guaranteedChar);

}
return result;
}

var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

