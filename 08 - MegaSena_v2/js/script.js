var state = {
  board: [],
  currentGame: [],
  savedGame: [],
};
function start() {
  readLocalStorage();
  createBoard();
  newGame();
}
function readLocalStorage() {
  if (!window.localStorage) {
    return;
  }

  var savedGamesFromLocalStorage = window.localStorage.getItem('saved-games');

  if (savedGamesFromLocalStorage) {
    state.savedGame = JSON.parse(savedGamesFromLocalStorage);
  }
}
function writeToLocalStorage() {
  if (!window.localStorage) {
    return;
  }
  window.localStorage.setItem('saved-games', JSON.stringify(state.savedGame));
}

function isNumberInGame(numberToCheck) {
  return state.currentGame.includes(addZeroNumber(numberToCheck));
}

function addNumberToGame(numberToAdd) {
  numberToAdd = addZeroNumber(numberToAdd);
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error(`Número inválido!!!!`, numberToAdd);
    return;
  }

  if (state.currentGame.length >= 6) {
    console.error(`Quantidade de números alcançada!!!!`, numberToAdd);
    return;
  }

  if (isNumberInGame(numberToAdd)) {
    console.error(`Esse número já está marcado:`, numberToAdd);
    return;
  }

  state.currentGame.push(addZeroNumber(numberToAdd));
}

function removeNumberToGame(numberToRemove) {
  var newGame = [];

  if (numberToRemove < 1 || numberToRemove > 60) {
    console.error(`Número inválido!!!!`, numberToRemove);
    return;
  }
  numberToRemove = addZeroNumber(numberToRemove);
  for (var index = 0; index < state.currentGame.length; index++) {
    var numberCurrent = addZeroNumber(state.currentGame[index]);

    if (numberCurrent === numberToRemove) {
      continue;
    }
    newGame.push(numberCurrent);
  }

  state.currentGame = newGame;
}

function saveGame() {
  if (!isGameComplete()) {
    console.error(`Ainda faltam números para serem marcados`);
    return;
  }

  state.savedGame.push(state.currentGame);
  writeToLocalStorage();
  newGame();
}

function isGameComplete() {
  return state.currentGame.length === 6;
}

function resetGame() {
  state.currentGame = [];
}

function createBoard() {
  state.board = [];

  for (var i = 1; i <= 60; i++) {
    state.board.push(i);
  }
}

function newGame() {
  resetGame();
  render();
}

function render() {
  renderBoard();
  renderButtons();
  renderSavedGames();
}

function renderBoard() {
  var divBoard = document.querySelector('#megasena-board');
  divBoard.innerHTML = '';

  var ulNumbers = document.createElement('ul');
  ulNumbers.classList.add('numbers');

  for (var i = 0; i < state.board.length; i++) {
    var currentNumber = addZeroNumber(state.board[i]);
    var liNumber = document.createElement('li');
    liNumber.textContent = currentNumber;
    liNumber.classList.add('number');
    liNumber.addEventListener('click', handleNumberClick);

    if (isNumberInGame(currentNumber)) {
      liNumber.classList.add('selected-number');
    }

    ulNumbers.appendChild(liNumber);
  }

  divBoard.appendChild(ulNumbers);
}

function handleNumberClick(event) {
  var clickedValue = Number(event.currentTarget.textContent);

  if (isNumberInGame(clickedValue)) {
    removeNumberToGame(clickedValue);
  } else {
    addNumberToGame(clickedValue);
  }

  render();
}

function createNewGameButton() {
  var button = document.createElement('button');
  button.textContent = 'Novo Jogo';
  button.addEventListener('click', newGame);
  return button;
}
function createNewRandomGameButton() {
  var button = document.createElement('button');
  button.textContent = 'Jogo Aleatório';
  button.addEventListener('click', randomGame);
  return button;
}
function createSaveGameButton() {
  var button = document.createElement('button');
  button.textContent = 'Salvar Jogo';
  button.addEventListener('click', saveGame);

  button.disabled = !isGameComplete();
  return button;
}
function renderButtons() {
  divButtons = document.querySelector('#megasena-buttons');
  divButtons.innerHTML = '';

  var buttonNewGame = createNewRandomGameButton();
  var buttonRandomGame = createNewGameButton();
  var buttonSaveGame = createSaveGameButton();

  divButtons.appendChild(buttonNewGame);
  divButtons.appendChild(buttonRandomGame);
  divButtons.appendChild(buttonSaveGame);
}

function randomGame() {
  resetGame();
  while (!isGameComplete()) {
    var randomNumber = Math.ceil(Math.random() * 60);
    if (!isNumberInGame(randomNumber)) {
      addNumberToGame(randomNumber);
    }
  }

  render();
}

function renderSavedGames() {
  var divSavedBoard = document.querySelector('#megasena-saved-games');
  divSavedBoard.innerHTML = '';

  if (state.savedGame.length === 0) {
    divSavedBoard.innerHTML = '<p>Nenhum jogo salvo!</p>';
  } else {
    var ulSavedGames = document.createElement('ul');
    for (var i = 0; i < state.savedGame.length; i++) {
      var currentGame = state.savedGame[i].sort(function (a, b) {
        return a - b;
      });

      var liSavedGame = document.createElement('li');
      liSavedGame.textContent = currentGame;

      ulSavedGames.appendChild(liSavedGame);
    }
  }
  divSavedBoard.appendChild(ulSavedGames);
  ren;
}

function addZeroNumber(number) {
  const zeroPad = (num, qty) => String(num).padStart(qty, '0');

  return zeroPad(number, 2);
}
start();
