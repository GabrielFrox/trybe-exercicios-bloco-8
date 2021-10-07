const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, currentName) => {
    currentName.split('').forEach((letter) => letter.toLowerCase() === 'a' ? acc += 1 : acc);
    return acc;
  }, 0);
}

console.log(containsA());