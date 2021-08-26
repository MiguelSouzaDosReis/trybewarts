const arrayMateira = [];
const formPrincipal = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const selectHouse = document.getElementById('house');
const radioFamily = document.getElementsByClassName('radio-family');
const materia = document.getElementsByClassName('subject');
const rateRadio = document.getElementsByClassName('radio-rate');
const loginButton = document.getElementById('login-button');
const check = document.getElementById('agreement');
const texto = document.getElementById('textarea');
const botaoEnviar = document.getElementById('submit-btn');

loginButton.addEventListener('click', () => {
  const emailInput = document.getElementById('login-email');
  const senhaInput = document.getElementById('login-password');
  if (emailInput.value === 'tryber@teste.com' || senhaInput.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

function creatRateOptions() {
  const avaliacao = document.getElementById('rate');
  for (let index = 1; index <= 10; index += 1) {
    const label = document.createElement('label');
    label.for = index;
    const opicoes = document.createElement('input');
    opicoes.id = index;
    opicoes.type = 'radio';
    opicoes.value = index;
    opicoes.name = 'rate';
    opicoes.classList.add('radio-rate');
    label.appendChild(opicoes);
    label.innerHTML += index;
    avaliacao.appendChild(label);
  }
}

check.addEventListener('click', (event) => {
  const button = document.getElementById('submit-btn');
  const element = event.target;

  if (element.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

texto.addEventListener('input', (event) => {
  const element = event.target;
  const contador = document.getElementById('counter');
  contador.innerText = 500 - element.value.length;
});

function getRadioFamilyValue() {
  let familyCheckdvalue;
  for (let i = 0; i < radioFamily.length; i += 1) {
    if (radioFamily[i].checked) {
      familyCheckdvalue = radioFamily[i].value;
    }
  }
  return familyCheckdvalue;
}

function getRateRadioValue() {
  let rateValue;
  for (let j = 0; j < rateRadio.length; j += 1) {
    if (rateRadio[j].checked) {
      rateValue = rateRadio[j].value;
    }
  }
  return rateValue;
}

function getSubjectValue() {
  for (let index = 0; index < materia.length; index += 1) {
    if (materia[index].checked) {
      arrayMateira.push(` ${materia[index].value}`);
    }
  }
  console.log(arrayMateira);
}

function addTextValueToHTML(objeto) {
  const keys = Object.keys(objeto);
  const values = Object.values(objeto);

  for (let i = 0; i < keys.length; i += 1) {
    const p = document.createElement('p');
    p.innerText = `${keys[i]}: ${values[i]}`;
    formPrincipal.appendChild(p);
  }
}

botaoEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  const familyChecked = getRadioFamilyValue();
  const rate = getRateRadioValue();
  getSubjectValue();
  const objeto = {
    Nome: `${inputName.value} ${inputLastName.value}`,
    Email: inputEmail.value,
    Casa: selectHouse.value,
    Família: familyChecked,
    Matérias: arrayMateira,
    Avaliação: rate,
    Observações: texto.value,
  };
  formPrincipal.innerHTML = '';
  addTextValueToHTML(objeto);
});
creatRateOptions();
