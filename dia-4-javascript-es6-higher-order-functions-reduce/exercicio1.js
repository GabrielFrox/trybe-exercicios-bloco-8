const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((newArray, currentValue) => newArray.concat(currentValue), []) // Usei o gabarito como referência, havia me esqueciso do concat
}

console.log(flatten())
