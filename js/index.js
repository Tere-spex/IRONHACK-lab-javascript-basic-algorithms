console.log("I'm ready!");

// Iteration 1: Names and Input
//Create a variable hacker1 with the driver's name.
//Create a variable hacker2 with the navigator's name.
const hacker1 = "john"; //driver
const hacker2 = "adam"; // navigator

//Print "The driver's name is XXXX"
//Print "The navigator's name is YYYY"
console.log(`The driver\`s name is ${hacker1}.`);
console.log(`The navigator\`s name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`the driver has the longer name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops
//3.1 
let name = '';
for (let i = 0; i < hacker1.length; i++) {
    name += hacker1[i];
    if(i === hacker1.length -1 ){
        name += '';
    }else{
        name += ' ';
    }
}
console.log(name.toUpperCase());
//3.2
console.log(hacker2.split("").reverse().join(""));

//3.3
  if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver\'s ${hacker1} goes first.`)
  }else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator ${hacker2} goes first definitely.`)
  }else{
    console.log('What?! You both have the same name?')
  }
  
//BONUS1
//Generate 3 paragraphs. Store the text in a variable type of string.
const paragraf = 'Lorem et ipsum dolor sit, amet consectetur adipisicing elit. Nulla sapiente et quisquam dolorum cumque deleniti doloribus saepe et voluptatibus quia rerum quas.';

//Make your program count the number of words in the string.
console.log(paragraf.split(" ").length);

//Make your program count the number of times the Latin word et appears.
const et = [];
paragraf.split(' ').filter(word => word === 'et' ? et.push(word) : '');
console.log(et.length);

//BONUS2
//"Was it a car or a cat I saw?" and "No 'x' in Nixon". COMO ELEMINAR OTROS CARACTERES???


const phraseToCheck = "A man, a plan, a canal, Panama!";
const finalPhrase = phraseToCheck.replace( /[^a-zA-Z0-9]/g, '' ).toLowerCase();

if (finalPhrase === finalPhrase.split("").reverse().join("")) {
    console.log("The phrase is a palindrome!");
}else{
    console.log("The phrase is not a palindrome!");
}

//ASSESSMENT
const calcSumOfMultiples = number => {
  let sum = 0;
  
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  
  console.log(sum);
};
calcSumOfMultiples (10)