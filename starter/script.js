// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.', '&', '*'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Function to prompt user for password options with requirements [done]
function getPasswordOptions() {
  return prompt("Press the button below to generate a password that complies with this criteria: At least 8 characters but no more than 128 Character types, Lowercase, Uppercase Numeric, Special characters, " + specialCharacters[8] + specialCharacters[0] + specialCharacters[9] + specialCharacters[22] + specialCharacters[23] + specialCharacters[12] + " etc.");
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var arrsArr = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters];
var output = [];

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var passwordLength = 8; // Desired password length

  while (output.length < passwordLength) {
    output.push(getRandom(arrsArr.flat()));
  }

  return output.slice(0, passwordLength).join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  console.log(output);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);