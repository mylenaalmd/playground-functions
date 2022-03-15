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
function concatName() {
 // let nomes[0];
  for (let index= nomes.length-1; index < nomes.lenht; index-1)
  return nomes[0,nomes.length-1]
  // seu código aqui

}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1; 
  let total = wins + ties;
  return total;
}
console.log(footballPoints(0,0));

// Desafio 6
function highestCount() {
  let h = array[0];
  let repeticao = array[0];
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
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

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
