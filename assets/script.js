// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var numChars = "0123456789";
var specialChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
var upperChars = "ABCDEFGHIJKLMNOPQRSTYWUZ";
var lowerChars = upperChars.toLocaleLowerCase();

var minLength = 8;
var maxLength = 128;

var num = false;
var special = false;
var lower = false;
var upper = false;

var passLength = 8;



// Write password to the #password input
function writePassword(generatedPass) {
  var password = generatedPass;
  var passwordText = document.querySelector("#password");

 passwordText.textContent = password;

}


function generatePassword() {

  special = document.getElementById("special").checked;
  num = document.getElementById("num").checked;
  lower = document.getElementById("lower").checked;
  upper = document.getElementById("upper").checked;


  passLength = document.getElementById("length").value;

  if(validatePassword(special,lower,upper,num,passLength)) 
  {
  
  var pass = "";
  var chars = "";

  if(num) {chars += numChars; pass += getRandomChar(numChars); }
  if(special) { chars +=specialChars; pass += getRandomChar(specialChars); }
  if(lower) { chars +=lowerChars;  pass += getRandomChar(lowerChars); }
  
  if(upper) {  chars +=upperChars;  pass += getRandomChar(upperChars); }

  

  var i = pass.length;

  for (i; i < passLength ; i++)
  {

    pass += getRandomChar(chars);
   

  }

 

 
//randomize and write it to html

writePassword(shuffle(pass));
  
}
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
