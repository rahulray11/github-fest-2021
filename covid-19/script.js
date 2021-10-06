const api = 'https://disease.sh/v3/covid-19/historical/all?lastdays=60';

const getData = async () => {
  const response = await fetch(`${api}`);
  if (response.ok) {
    return await response.json();
  } else {
    return Promise.reject(response.status);
  }
};

const result = getData();
result
  .then((data) => {
    let date = Object.keys(data.cases);
    let total = Object.values(data.cases);
    let deaths = Object.values(data.deaths);
    let recovered = Object.values(data.recovered);

    var ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: date,
        datasets: [
          {
            label: 'Total Cases',
            data: total,
            borderColor: 'rgba(255, 99, 132)',
            fill: false,
          },
          {
            label: 'Recovered Cases',
            data: recovered,
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: false,
          },
          {
            label: 'Deaths',
            data: deaths,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Numbers in Thousands',
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Date(DD/MM/YYYY)',
              },
            },
          ],
        },
        title: {
          display: true,
          text: `Coronovirus Cases in India for Last Twp Months`,
        },
      },
    });
  })
  .catch((error) => {
    console.log('Error: ', error);
  });