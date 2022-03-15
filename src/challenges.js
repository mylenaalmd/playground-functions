// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
     return true;
  }
     return false;
}
console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base,height) {
  let area = (base * height)/2;
  return area;
}
console.log(calcArea(10,50));

// Desafio 3 
function splitSentence(string) {
  return string.split(" ")
}
console.log(splitSentence("go Trybe go"));

// Desafio 4
function concatName(nomes) {
   return nomes[nomes.length-1] + ', ' + nomes[0];
} 
console.log(concatName(['lucas','Cassiano','Ferraz','Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1; 
  let total = wins + ties;
  return total;
}
console.log(footballPoints(0,0));

// Desafio 6
function highestCount(numbers) {
  for (let i = 0; i < array.length; i++){
    if (numbers[i] >= repeticao){
     repeticao = numbers[i];
    }
  } repeticao = repeticao.length
  return repeticao
}
console.log(highestCount[9,1,2,3,9,5,7]);

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numeros) {
let armazeneString = [0];
    for (let i = 0; i < numeros.length; i++){
      if (numeros[i] % 3 === 0  && numeros[i] % 5 === 0){
        armazeneString.push('fizzBuzz');
      } else if (numeros[i] % 3 ===0 && numeros[i] % 5 !== 0){
        armazeneString.push('fizz');
      } else if (numeros[i] % 3 !== 0 && numeros[i] % 5 === 0){
        armazeneString.push('buzz');
      } else {
        armazeneString.push('bug!');
      }
  }return armazeneString;
}
console.log(fizzBuzz([2,15,7,9,45]));

// Desafio 9
function encode(string) {
  let vogal = [a,e,i,o,u];
  let novaFrase = [];
  for (let i=0; i < string.lenght; i++){
    if (string[i] === vogal){
      if (vogal === a){
        novaFrase.push(1);
      } else if (vogal === e){
        novaFrase.push(2);
      } else if (vogal === i){
        novaFrase.push(3);
      } else if (vogal === o){
        novaFrase.push(4);
      } else if (vogal === u){
        novaFrase.push(5);
      }
    } else {
      novaFrase.push(string[i]);
    }
  } return novaFrase;
} console.log(encode("hi there!"));

function decode(novaFrase) {
    let number = [1,2,3,4,5];
    let frase = [];
    for (let i=0; i < novaFrase.lenght; i++){
      if (novaFrase[i] === number){
        if (number === 1){
          frase.push(a);
        } else if (number === 2){
          frase.push(e);
        } else if (number === 3){
          frase.push(i);
        } else if (number === 4){
          frase.push(o);
        } else if (number === 5){
          frase.push(u);
        }
      } else {
        novaFrase.push(frase[i]);
      }
    } return frase;
  } console.log(encode(frase));

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
