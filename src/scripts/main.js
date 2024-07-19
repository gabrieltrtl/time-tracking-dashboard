
//Fetch Requisition
const fetchData = fetch('../../data.json')
  .then(response => response.json())
  .then(data => {
    updateUI(data, 'weekly');

    document.getElementById('daily-button').addEventListener('click', () => {
      updateUI(data, 'daily');
    });

    document.getElementById('weekly-button').addEventListener('click', () => {
      updateUI(data, 'weekly');
    });

    document.getElementById('monthly-button').addEventListener('click', () => {
      updateUI(data, 'monthly');
    });
    
  })
  .catch(error => {
    console.log('Error fetching the JSON:', error)
  })
//End Fetch Requisition
function updateUI(data, timeframe) {
  const listItems = document.querySelectorAll('.list__item');

  let pastText;

  if (timeframe === 'daily') {
    pastText = 'Last Day';
  } else if (timeframe === 'weekly') {
    pastText = 'Last Week';
  } else if (timeframe === 'monthly') {
    pastText = 'Last Month'
  };


  listItems.forEach((listItem, index) => {
    const itemData = data[index];
    
    listItem.querySelector('.item__title').textContent = itemData.title;

    listItem.querySelector('.current-count').textContent = `${itemData.timeframes[timeframe].current}hrs`;
    listItem.querySelector('.past-count').textContent = `${pastText} - ${itemData.timeframes[timeframe].previous}hrs`;
  });
}