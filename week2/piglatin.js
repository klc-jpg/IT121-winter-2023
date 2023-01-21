let word = ' '; //declare empty string variable to hold user input
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; //declare array of vowels
word = window.prompt('Enter a word (letters only, minimum 2):'); //prompt user to enter a word
let error = word.length < 2; //set minimum word length

if (vowels.includes(word[0]) && (!error)) { //true if first letter of user input is vowel and word is 2 letters or more 
    document.write('<h2>You entered:</h2><h3>' + word + '</h3><br>'); //display user input for review
    document.write('<h2>Here\'s your translation:</h2> <h3> ' + word.concat('way')) + '</h3>'; //display translation with appropriate rule
} else if ((vowels.includes(word[1])) && (!error)) { //true if first letter of user input is consonant and word is 2 letters or more 
    firstConsonant = word.slice(0, 1).toLowerCase(); //store first character of input string in new variable
    firstConsonantEnd = word.slice(1); //isolate user input starting from the end down to the first letter
    document.write('<h2>You entered:</h2><h3>' + word + '</h3><br>'); //display user input for review
    document.write('<h2>Here\'s your translation:</h2><h3> ' + (firstConsonantEnd) + (firstConsonant.concat('ay')) + '</h3>'); //display translation with appropriate rule
} else if ((vowels.includes(word[2]) && (!error))) { //true if first and second letters of user input are consonants and the word is 2 letters or more 
    secondConsonant = word.slice(0, 2).toLowerCase(); //store first and second chars of input string in new variable
    secondConsonantEnd = word.slice(2); //isolate user input starting from the end down to the second letter
    document.write('<h2>You entered:</h2><h3>' + word + '</h3><br>'); //display user input for review
    document.write('<h2>Here\'s your translation:</h2><h3> ' + (secondConsonantEnd) + (secondConsonant.concat('ay')) + '</h3>'); //display translation with appropriate rule
} else {
    document.write('<h2>Your input cannot be translated, try again!</h2>'); //print error message
}