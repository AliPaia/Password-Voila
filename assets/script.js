// Assignment Code
var generateBtn = document.querySelector("#generate");
// finsih filling in *****
var uppercase = ['A','B','C',]
var lowercase = ['a', 'b', 'c',]
var special = ['!', '@', '#',]
var numeric = ['0','1','2',]

// Write password to the #password input
function writePassword() {

// First user question
var enter = confirm("Would you like a random password?")

if(enter){
  alert("Your password must be between 8 to 128 characters long")
  var passnum = Number(prompt("How many characters would you like your password to be"))
}  









var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
