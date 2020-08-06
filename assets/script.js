// Assignment code here


// Get references to the #generate , options and password elements
var generateBtn = document.querySelector("#generate");
var optionsBoxes = document.querySelector("#options");
var passwordText = document.querySelector("#password")

var numChars = "0123456789";
var specialChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
var upperChars = "ABCDEFGHIJKLMNOPQRSTYWUZ";
var lowerChars = upperChars.toLocaleLowerCase();

var minLength = 8;
var maxLength = 128;
var passLength = 8;

var num = false;
var special = false;
var lower = false;
var upper = false;


var STATE = "";


reset();



// Write password to the #password input
function writePassword(generatedPass) {

  var password = generatedPass;
  passwordText.textContent = password;

 //prompts go away, password textarea appears

 optionsBoxes.style.display = "none";
 passwordText.style.display = "inline";

}

function reset()
{

  optionsBoxes.style.display = "inline";
  passwordText.style.display = "none";

}


function generatePassword() {

// if a password has been generated it returns the app back to characters and length prompts

  if(STATE == "generated") 
  
  { 
     reset();
     STATE = ""; 
     return
  
  }

  loadForms();

  if(validatePassword(special,lower,upper,num,passLength)) 
  {
  
  //make sure there's at least one character of each selected type

  var pass = addInitialChars("");


  //get all character ranges together

  var chars = concatenateChars("");

  
 //add the remaining characters to password

  var i = pass.length;

  for (i; i < passLength ; i++)
  {

    pass += getRandomChar(chars);
   

  }

 
STATE = "generated";
 
//randomize and write it to html

writePassword(shuffle(pass));
  
}
}


function concatenateChars(chars)
{
  if(num) { chars += numChars; }

  if(special) { chars +=specialChars; }

  if(lower) { chars +=lowerChars;   }
  
  if(upper) {  chars +=upperChars;  }

  return chars

}

function addInitialChars(pass)
{

  if(num) {pass += getRandomChar(numChars); }

  if(special) { pass += getRandomChar(specialChars); }

  if(lower) {  pass += getRandomChar(lowerChars); }
  
  if(upper) {   pass += getRandomChar(upperChars); }

  return pass

}


function loadForms()
{

  special = document.getElementById("special").checked;
  num = document.getElementById("num").checked;
  lower = document.getElementById("lower").checked;
  upper = document.getElementById("upper").checked;

  passLength = document.getElementById("length").value;

}

function validatePassword(special, lower, upper, num, length) {

  if(!special && !lower && !upper && !num ) {alert("Please Choose at least one Character type"); return false}
  if(length < minLength || length > maxLength) {alert("Your password must be between " +minLength +" and " + maxLength + " characters long!"); return false}
  
     return true;
  } 

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);



// String Shuffle utility (  source: https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/   )

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}


function shuffle(s) {
  var arr = s.split('');           // Convert String to array
  var n = arr.length;              // Length of the array
  
  for(var i=0 ; i<n-1 ; ++i) {
    var j = getRandomInt(n);       // Get random of [0, n-1]
    
    var temp = arr[i];             // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  s = arr.join('');                // Convert Array to string
  return s;                        // Return shuffled string
}


function getRandomChar(string)
{
var index =Math.floor(string.length * Math.random());
var char = string.charAt(index);

return char;

}
