function palindrome() {
  var str = document.getElementById("user_input").value;
  var word = "";
  var spelledWord;
  var regex = /[a-z0-9]/i;
  var outPut = document.getElementById("output");

  //delete spaces and especial letters
  for (var i = 0; i < str.length; i++) {
    if (regex.test(str[i]) == true) {
      word += str[i].toLowerCase();     
    }
  }

  spelledWord = word
    .split("")
    .reverse()
    .join("");

  //verify if is or not a palindrome
  if (word === spelledWord) {
    console.log(true);
    outPut.style.color = "green";
    outPut.innerHTML =  "It is a palindrome";
  } else {
    console.log(false);
    outPut.style.color = "red";
    outPut.innerHTML =  "It isn't a palindrome";
  }
}

//reset the input
function reset() {
  document.getElementById("user_input").value = "";
  console.log("deleted");
}

//info button
function info() {
  alert("A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. You need to write an string and the program will return true if the given string is a palindrome. Otherwise, return false.");
}

