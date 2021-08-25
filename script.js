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
