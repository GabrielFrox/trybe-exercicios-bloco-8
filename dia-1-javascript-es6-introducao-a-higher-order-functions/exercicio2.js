
const loteryCheck = (selectedNum, rewardNum) => {
  let result;
  selectedNum === rewardNum ? result = 'Parabéns você ganhou' : result = 'Tente novamente';
  return result
} 


const lotery = (num, func) => {
  const rnum = Math.trunc(Math.random() * 5) + 1;  // Melhor randomizar dessa forma pois com round números de margem são desfavorecidos(1 só aparece caso rnum seja < 1.5 | enquanto 2 aparece caso rnum > 1.5 ou < 2.5, tendo assim o dobro de chance de aparecer)
  return `${func(num, rnum)} | O número sorteado foi ${rnum}`;
}

console.log(lotery(4, loteryCheck));