document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    let isValid = true;

    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        isValid = false;
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }

      if (input.value !== '') {
        input.classList.add('valid');
      } else {
        input.classList.remove('valid');
      }
    });

    if (isValid) {
      window.location.href = 'thankYou.html';
    } else {
      alert('Todos os campos devem ser preenchidos corretamente');
    }
  });
});

function validateForm() {
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();

  if (firstName.length < 2) {
    alert('O nome deve ter pelo menos 2 caracteres.');
    return false;
  }

  if (lastName.length < 2) {
    alert('O sobrenome deve ter pelo menos 2 caracteres.');
    return false;
  }

  const phone = document.getElementById('phone').value.trim();
  const phoneRegex = /^[0-9]{10,11}$/;

  if (!phoneRegex.test(phone)) {
    alert(
      'O número de telefone é inválido. Por favor, insira um número válido com 10 ou 11 dígitos.'
    );
    return false;
  }

  return true;
}
