function fetchData() {
  return new Promise( resolve => {
    fetch('https://swapi.co/api/people',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    )
    .then(data => data.json())
    .then(data => { resolve(data) })
  })
}