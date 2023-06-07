// Desafio 11
function generatePhoneNumber(numbers) {
  let nTelefone = [];
  let repet = [];
  let repeticao = 0;

  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.';
  } for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let i = 0; i < numbers.length; i++) { // roda por todos os numeros do array numbers
    repet = numbers[i];
    for (let i = 1; i < numbers.length; i++) { // idetifica um numero que achou repetido
      repeticao = 0;
      if (numbers[i] == repet) {
        for (let i = 0; i < numbers.length; i++) { // verifica quantas vezes houve essa repetição
          if (numbers[i] === repet) {
            repeticao += 1;
          }
        }
        if (repeticao == 3 || repeticao > 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    nTelefone.push(numbers[i]);
  }
  return `(${nTelefone[0]}${nTelefone[1]})` + ` ${nTelefone[2]}${nTelefone[3]}${nTelefone[4]}${nTelefone[5]}${nTelefone[6]}-${nTelefone[7]}${nTelefone[8]}${nTelefone[9]}${nTelefone[10]}`;
} console.log(generatePhoneNumber([7, 9, 8, 9, 6, 1, 9, 3, 5, 9, 2]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineB + lineC)) {
    return false;
  }
  if (Math.abs(lineA) < Math.abs(lineB - lineC) || Math.abs(lineB) < Math.abs(lineA - lineC) || Math.abs(lineC) < Math.abs(lineA - lineB)) {
    return false;
  }
  if (lineA < (lineB + lineC) && Math.abs(lineA) > Math.abs(lineB - lineC)) {
    if (lineB < (lineA + lineC) && Math.abs(lineB) > Math.abs(lineA - lineC)) {
      if (lineC < (lineA + lineB) && Math.abs(lineC) > Math.abs(lineA - lineB)) {
      }
    }
  } return true;
} console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
