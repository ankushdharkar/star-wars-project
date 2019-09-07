var btnLoadData = document.querySelector('#btn-load-data');
btnLoadData.addEventListener('click', function loadDataFunc() {
  btnLoadData.classList.add('loading')
  loadStarWarsCards();
})


var btnClearData = document.querySelector('#btn-clear-data');
btnClearData.addEventListener('click', function loadDataFunc() {
  clearAllCharacters();
})

function loadStarWarsCards () {
  const starWarsDataPrm = fetchData();
  starWarsDataPrm.then(data => {
    data.forEach( chrRes => {
      const { birth_year: birthYear, gender, name, starships } = chrRes
      addCharacterCard(name, birthYear, gender, starships)
    })
  })
}


function clearAllCharacters() {
  const allCharacterCards = document.querySelectorAll('.chr-card')
  allCharacterCards.forEach(chrCard => {
    chrCard.remove()
  })
}

function addCharacterCard(name, birthYear, gender, starships) {
  var cardsHolder = document.querySelector('#holder-cards');
  var starshipsStr = starships.join(', ')
  const img = `./img/${birthYear}.png`

  cardsHolder.insertAdjacentHTML('beforeend', 
    `<div class="chr-card">
      <img src=${img} class="chr-img"/>
      <div class="chr-name">
        ${name}
      </div>
      <div class="chr-starships">
        ${starshipsStr}
      </div>
      <div class="chr-birth-year">
        ${birthYear}
      </div>
      <div class="chr-gender">
        ${gender}
      </div>
    </div>`);

    cardsHolder.lastChild.addEventListener('click', function removeCard() {
      this.remove()
    })
}

var btnIncreaseNameSize = document.querySelector('#btn-increase-name-size');
btnIncreaseNameSize.addEventListener('click', function () {
  const allNames = document.querySelectorAll('.chr-name')
  allNames.forEach( nameItem => {
    nameItem.style.fontSize = '20px';
    nameItem.style.color = 'purple';
    nameItem.style.fontSize = '1000px';
    nameItem.style.color = 'red';
    nameItem.style.fontSize = '25px';
    nameItem.style.color = 'white';
  })
})

document.addEventListener('DOMContentLoaded', function(){
  loadStarWarsCards();
});

window.addEventListener('load', function loadedWindow () {
  const allElems = [...document.getElementsByClassName('starting-header')];
  allElems.forEach(elem => {
    elem.style.fontSize = '40px';
  })
});