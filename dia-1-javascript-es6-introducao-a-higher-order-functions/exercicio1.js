const person = (nome) => {
  const email = nome.split(' ').join('_').toLowerCase();
  return {
    nome,
    email: `${email}@trybe.com`
  }
}

const newEmployees = (func) => {
  const employees = {
  id1: func('Carlos de Andrade'),
  id2: func('Maria Joaquina de Assunção'),
  id3: func('Baltazar de Oliveira Cardoso')
  }
  return employees;
}


console.log(newEmployees(person));