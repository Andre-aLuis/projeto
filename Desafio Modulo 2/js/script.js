var somaAB = 0;
var subtraiAdeB = 0;
var subtraiBdeA = 0;
var multiplicaAB = 0;
var divideAporB = 0;
var divideBporA = 0;
var potenciaAporB = 0;
var potenciaBporA = 0;
var raizdeA = 0;
var raizdeB = 0;
var fatorialdeA = 0;
var fatorialdeB = 0;
var porcentagemAemB = 0;
var porcentagemBemA = 0;
var mediadeAeB = 0;

function start() {
  console.log('Teste');
  botao = document.querySelector('#botalcalc');
  console.log(botao);
  botao.addEventListener('click', efetuaOperacoes);

  makeGrid();
}

function makeGrid() {
  let tabela = document.querySelector('#table-result');
  console.log(tabela);
  let z = 1;
  let i = 1;
  let j = 1;
  for (i = 1; i < 4; i++) {
    let myRow = document.createElement('tr');
    myRow.id = 'row' + i;
    tabela.appendChild(myRow);
    console.log(tabela);
    console.log(i);
    let row = document.getElementById('row' + i);
    for (j = 1; j < 6; j++) {
      let lin = document.createElement('td');
      lin.textContent = 'lin' + z;
      lin.id = 'lin' + z;

      row.appendChild(lin);

      z++;
    }
  }
}

function efetuaOperacoes() {
  var numero1 = document.querySelector('#numero1');
  var numero2 = document.querySelector('#numero2');

  numero1 = Number(numero1.value);
  numero2 = Number(numero2.value);

  somaAB = soma(numero1, numero2);
  subtraiAdeB = subtraiab(numero1, numero2);
  subtraiBdeA = subtraiba(numero1, numero2);
  multiplicaAB = multiplica(numero1, numero2);
  divideAporB = divideab(numero1, numero2);
  divideBporA = divideba(numero1, numero2);
  potenciaAporB = potenciaab(numero1, numero2);
  potenciaBporA = potenciaba(numero1, numero2);
  raizdeA = raiza(numero1);
  raizdeB = raizb(numero2);
  fatorialdeA = fatoriala(numero1);
  fatorialdeB = fatorialb(numero2);
  porcentagemAemB = porcentagemab(numero1, numero2);
  porcentagemBemA = porcentagemba(numero1, numero2);
  mediadeAeB = media(numero1, numero2);

  preencheGrid();
}

function preencheGrid() {
  linha = document.querySelector('#lin1');
  linha.textContent = 'Soma: ' + '\n' + somaAB.toFixed(0);

  linha = document.querySelector('#lin2');
  linha.textContent = subtraiAdeB.toFixed(0);

  linha = document.querySelector('#lin3');
  linha.textContent = subtraiBdeA.toFixed(0);

  linha = document.querySelector('#lin4');
  linha.textContent = multiplicaAB.toFixed(0);

  linha = document.querySelector('#lin5');
  linha.textContent = divideAporB.toFixed(2);

  linha = document.querySelector('#lin6');
  linha.textContent = divideBporA.toFixed(2);

  linha = document.querySelector('#lin7');
  linha.textContent = potenciaAporB.toFixed(0);

  linha = document.querySelector('#lin8');
  linha.textContent = potenciaBporA.toFixed(0);

  linha = document.querySelector('#lin9');
  linha.textContent = raizdeA.toFixed(2);

  linha = document.querySelector('#lin10');
  linha.textContent = raizdeB.toFixed(2);

  linha = document.querySelector('#lin11');
  linha.textContent = fatorialdeA.toFixed(0);

  linha = document.querySelector('#lin12');
  linha.textContent = fatorialdeB.toFixed(0);

  linha = document.querySelector('#lin13');
  linha.textContent = porcentagemAemB.toFixed(0) + '%';

  linha = document.querySelector('#lin14');
  linha.textContent = porcentagemBemA.toFixed(0) + '%';

  linha = document.querySelector('#lin15');
  linha.textContent = mediadeAeB.toFixed(1);
}

function soma(num1, num2) {
  return num1 + num2;
}
function subtraiab(num1, num2) {
  return num1 - num2;
}
function subtraiba(num1, num2) {
  return num2 - num1;
}
function multiplica(num1, num2) {
  return num1 * num2;
}
function divideab(num1, num2) {
  return num1 / num2;
}
function divideba(num1, num2) {
  return num2 / num1;
}
function potenciaab(num1, num2) {
  return Math.pow(num1, num2);
}
function potenciaba(num1, num2) {
  return Math.pow(num2, num1);
}
function raiza(num1) {
  return Math.sqrt(num1);
}
function raizb(num2) {
  return Math.sqrt(num2);
}
function fatoriala(num1) {
  return calcularFatorialRecursivamente(num1);
}
function fatorialb(num2) {
  return calcularFatorialRecursivamente(num2);
}
function porcentagemab(num1, num2) {
  return (num1 / num2) * 100;
}
function porcentagemba(num1, num2) {
  return (num2 / num1) * 100;
}
function media(num1, num2) {
  return divideab(soma(num1, num2),2);
}
function calcularFatorialRecursivamente(n) {
  if (n === 1) {
    return 1;
  }

  return n * calcularFatorialRecursivamente(n - 1);
}

start();
