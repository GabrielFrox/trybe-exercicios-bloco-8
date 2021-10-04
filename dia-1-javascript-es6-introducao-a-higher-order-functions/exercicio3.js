const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const avaliation = (rightAnswers, studentAnswers, callback) => {
  return callback(rightAnswers, studentAnswers);
}

const check = (rightAn, studentAn) => {
  let cont = 0;
  for (let index = 0; index < rightAn.length; index += 1) {
    if (rightAn[index] === studentAn[index]) cont += 1;
    else if (studentAn[index] === 'N.A');
    else cont -= 0.5;
  }
  return cont;
}

console.log(avaliation(RIGHT_ANSWERS, STUDENT_ANSWERS, check));

