function start() {
  var buttonCalculateImc = document.querySelector('#button-calculateIMC');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
  var inputWeigth = document.querySelector('#peso');
  var inputHeigth = document.querySelector('#altura');
  inputWeigth.addEventListener('input', handleButtonClick);
  inputHeigth.addEventListener('input', handleButtonClick);
}
function calculateIMC(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  0, 161.75;
  var inputWeigth = document.querySelector('#peso');
  var inputHeigth = document.querySelector('#altura');
  var paragraphResult = document.querySelector('#imc-result');
  var imcResult = calculateIMC(
    Number(inputWeigth.value),
    Number(inputHeigth.value)
  );
  paragraphResult.innerHTML = String(imcResult.toFixed(2).replace('.', ','));
}
start();
