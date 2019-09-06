var btnLoadData = document.querySelector('#btn-load-data');

btnLoadData.addEventListener('click', function loadDataFunc() {
  var starWarsData = fetchData();
  console.log(starWarsData)
})