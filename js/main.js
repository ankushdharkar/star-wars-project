var btnLoadData = document.querySelector('#btn-load-data');
btnLoadData.addEventListener('click', function loadDataFunc() {
  var starWarsDataPrm = fetchData();

  starWarsDataPrm.then(data => {
    const { results } = data

    results.forEach( chrRes => {
      const { birth_year: birthYear, gender, name } = chrRes
      addCharacterCard(name, birthYear, gender)
    })
  })
})


var btnClearData = document.querySelector('#btn-clear-data');
btnClearData.addEventListener('click', function loadDataFunc() {
  clearAllCharacters();
})


function clearAllCharacters() {
  const allCharacterCards = document.querySelectorAll('.chr-card')
  allCharacterCards.forEach(chrCard => {
    chrCard.remove()
  })
}

function addCharacterCard(name, birthYear, gender) {
  var cardsHolder = document.querySelector('#holder-cards');

  cardsHolder.insertAdjacentHTML('beforeend', 
    `<div class="chr-card">
      <div class="chr-name">
        ${name}
      </div>
      <div class="chr-birth-year">
        ${birthYear}
      </div>
      <div class="chr-gender">
        ${gender}
      </div>
    </div>`);
}