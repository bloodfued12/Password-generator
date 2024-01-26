
// arrays that define values for the password generator
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.', '&', '*'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// prompt function to grab user required characters
function getPasswordOptions() {
  return prompt("Enter any characters you would like in a password that complies with this criteria: At least 8 characters but no more than 128 Character types, Lowercase, Uppercase Numeric, Special characters, " + specialCharacters[8] + specialCharacters[0] + specialCharacters[9] + specialCharacters[22] + specialCharacters[23] + specialCharacters[12] + " etc.");
}

// function to get a random index number
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// array that concatenates all the defined arrays
var arrsArr = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters];

// an empty array to have the generated password go into
var output = [];

// password generation function that redefines the variables from getPasswordOptions and grabs a password length from the user
function generatePassword() {
  // redefines the returned values of getPasswordOptions
  var passwordOptions = getPasswordOptions();

  // grabs from the user the required password length
  var passwordLength = parseInt(prompt("How many characters would you like the password to be? (8-128)"));

  // turns the user provided characters from password options into an array so that the data can be used in the generation of the password
  var userOptions = passwordOptions.split('');

  // user variable validations
  if (passwordLength < 8 || passwordLength > 128) {
    alert('This password length is not within the given parameters.');
    return;
  }

  // generates a random password to the length of password length
  while (output.length < passwordLength) {
    output.push(getRandom(arrsArr.flat()));
  }

  // iterates through useroptions and adds it to the array output
  for (var i = 0; i < userOptions.length; i++) {
    var randomOutputIndex = Math.floor(Math.random() * output.length);
    output.splice(randomOutputIndex, 0, userOptions[i]);
  }

  // removes unnecessary characters from the new array
  if (output.length > passwordLength) {
    output.splice(passwordLength);
  }

  // logs output to the console
  console.log(output);

  // joins the output array and transforms it to a string value
  return output.join('');
}

// grabs the id for the generate button
var generateBtn = document.querySelector('#generate');

// grabs the value of password and grabs the id of element #password so that the value can be changed
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  // checks if the password is undefined and if it is exits the function
  if (password === undefined) {
    return;
  } else {
    // if not undefined change the passwordText value to = password
    passwordText.value = password;
  }
}
generateBtn.addEventListener('click', writePassword);

