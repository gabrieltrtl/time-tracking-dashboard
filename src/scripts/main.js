const fetchData = fetch('../../data.json')
  .then(response => response.json())
  .then(data => {
    
  })
  .catch(error => {
    console.log('Error fetching the JSON:' error)
  })
