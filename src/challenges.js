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
  let maiorNumero = numbers[0];
  let repeticao = 0;

  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > maiorNumero){
      maiorNumero = numbers[i]
    }
  }
    
  for (let i = 0; i < numbers.length; i++){
      if (numbers[i] === maiorNumero){
        repeticao += 1
      }
  } return repeticao;
} console.log(highestCount([-2,-1,-1]));

// Desafio 7 
function catAndMouse(mouse,cat1,cat2) {
  let difGato1 = Math.abs(mouse - cat1);
  let difGato2 = Math.abs(mouse - cat2);
  
  if (difGato1 < difGato2){
    return "cat1";
  }
  else if (difGato1 > difGato2){
    return "cat2";
  }
  else if (difGato1 === difGato2){
    return "os gatos trombam e o rato foge";
  }
} console.log(catAndMouse(4,2,0));

// Desafio 8
function fizzBuzz(numeros) {
let armazeneString = [];
    for (let i = 0; i < numeros.length; i++){
      if (numeros[i] % 3 === 0  && numeros[i] % 5 === 0){
        armazeneString.push("fizzBuzz");
      } else if (numeros[i] % 3 ===0 && numeros[i] % 5 !== 0){
        armazeneString.push("fizz");
      } else if (numeros[i] % 3 !== 0 && numeros[i] % 5 === 0){
        armazeneString.push("buzz");
      } else {
        armazeneString.push("bug!");
      }
  }return armazeneString;
}
console.log(fizzBuzz([2,15,7,9,45]));

// Desafio 9
function encode(string) {
  let trocaLetra = string.split("")
  for (let i in trocaLetra){
    if (trocaLetra[i] == "a") {
      trocaLetra[i] = 1; 
    } else if (trocaLetra[i] == "e") {
      trocaLetra[i] = 2; 
    } else if (trocaLetra[i] == "i") {
      trocaLetra[i] = 3; 
    } else if (trocaLetra[i] == "o") {
      trocaLetra[i] = 4; 
    } else if (trocaLetra[i] == "u") {
      trocaLetra[i] = 5; 
    }
  } return trocaLetra.join("");
} 
function decode(string) {
  let trocaLetra = string.split("")
  for (let i in trocaLetra){
    if (trocaLetra[i] == 1) {
      trocaLetra[i] = "a"; 
    } else if (trocaLetra[i] == 2) {
      trocaLetra[i] = "e"; 
    } else if (trocaLetra[i] == 3) {
      trocaLetra[i] = "i"; 
    } else if (trocaLetra[i] == 4) {
      trocaLetra[i] = "o"; 
    } else if (trocaLetra[i] == 5) {
      trocaLetra[i] = "u"; 
    }
  } return trocaLetra.join("");
}
console.log(encode("hi there!"));

// Desafio 10  
function techList(nomesTech, name){
  let listinha = [];
  let array = [];
 if (nomesTech.length == 0 ){
  return "Vazio!";
} else {
let list = nomesTech.sort();
  for (let i= 0; i < list.length; i++){
 let newList = list[i];
   listinha.push(newList);
  } for (let i= 0; i < listinha.length; i++){
    let lista = {"tech": listinha[i], "name" : name};
    array.push(lista);
 } 
} return array;
} console.log(techList([], "lucas"));

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
