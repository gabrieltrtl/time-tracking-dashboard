const fetchData = fetch('../../data.json')
  .then(response => response.json())
  .then(data => {
    updateUI(data, 'weekly');

    document.getElementById('daily-button').addEventListener('click', () => {
      updateUI(data, 'daily');
    });

    document.getElementById('weekly-button').addEventListener('click', () => {
      updateUI(data, 'weekly');

    })
    
  })
  .catch(error => {
    console.log('Error fetching the JSON:', error)
  })
