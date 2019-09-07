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

    Promise.all([fetchPeople, fetchStarships]).then(([peopleData, starshipsData]) => {
      const { results: peopleArr = [] } = peopleData
      const { results: starshipsArr = [] } = starshipsData

      const starshipsMap = starshipsArr.reduce((acc, curr) => {
        const { url, name } = curr
        acc[url] = name
        return acc
      }, {})

      let resData = []
      peopleArr.forEach( person => {
        let resObj = person
        let { starships = [] } = person
        if (starships.length > 0) {
          const starshipsNames = []
          starships.forEach(shipURL => {
            const nameOfStarship = starshipsMap[shipURL]
            starshipsNames.push(nameOfStarship)
          })
          resObj.starships = starshipsNames
        }
        resData.push(resObj)
      })
      resolve(resData)
    })
  })
}