function palindrome() {
  var str = document.getElementById("user_input").value;
  var word = "";
  var spelledWord;
  var regex = /[a-z0-9]/i;
  var outPut = document.getElementById("output");

  for (var i = 0; i < str.length; i++) {
    if (regex.test(str[i]) == true) {
      word += str[i].toLowerCase();     
    }
  }

  spelledWord = word
    .split("")
    .reverse()
    .join("");

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

function reset() {
  document.getElementById("user_input").value = "";
  console.log("deleted");
}

