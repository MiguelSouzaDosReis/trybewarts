const loginButton = document.getElementById('login-button');

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
  const avaliacao = document.getElementById('rate')
  for (let index = 1; index <= 10; index++) {
    let label = document.createElement('label');
    label.for = index;
    
    let opicoes = document.createElement('input');
    opicoes.id = index
    opicoes.type = 'radio';
    opicoes.value = index;
    opicoes.name = 'rate';
    label.appendChild(opicoes);

    label.innerHTML += index;
    
    avaliacao.appendChild(label);
  }
}
creatRateOptions()
