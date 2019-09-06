function fetchData() {
  return new Promise( resolve => {

    const fetchPeople = fetch('https://swapi.co/api/people',
      {
        method: 'POST',
        // mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    ).then(data => data.json())

    const fetchStarships = fetch('https://swapi.co/api/starships',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(data => data.json())

    Promise.all([fetchPeople, fetchStarships]).then(([peopleData, starShipsData]) => {
      const { results: peopleArr = [] } = peopleData
      const { results: starShipsArr = [] } = starShipsData

      const starShipsMap = starShipsArr.reduce((acc, curr) => {
        const { url, name } = curr
        acc[url] = name
        return acc
      }, {})

      let resData = peopleArr
      resData.forEach( person => {
        const { films: starships = [] } = person
        if(starships.length > 0){
          let starshipsNames = []
          starships.forEach(ship => {
            nameOfStarship = starShipsMap[ship]
            starshipsNames.push(starShipsMap[ship])
          })
        }
      })
      resolve(resData)
    })
  })
}