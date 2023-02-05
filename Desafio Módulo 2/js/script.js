function start() {
  console.log('start');
  console.log(54, 1.54);
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
  handleButtonClick();

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcResult2 = document.querySelector('#imc-result2');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  console.log(weight);
  console.log(height);
  var imc = calculateImc(weight, height);

  var formattedIMC = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedIMC;

  if (formattedIMC >= '16' && formattedIMC < '16.99') {
    imcResult2.textContent = 'Muito abaixo do peso';
  } else if (formattedIMC >= '17' && formattedIMC < '18.49') {
    imcResult2.textContent = 'Abaixo do peso';
  } else if (formattedIMC >= '18.5' && imc < '24.99') {
    imcResult2.textContent = 'Peso normal';
  } else if (formattedIMC >= '25' && formattedIMC < '29.99') {
    imcResult2.textContent = 'Acima do peso';
  } else if (formattedIMC >= '30' && formattedIMC < '34.99') {
    imcResult2.textContent = 'Obesidade Grau I';
  } else if (formattedIMC >= '35' && formattedIMC < '40') {
    imcResult2.textContent = 'Obesidade Grau II';
  } else if (formattedIMC >= '40') {
    imcResult2.textContent = 'Obesidade Grau III';
  } else {
    imcResult2.textContent = 'Opção Inválida';
  }
}

start();
