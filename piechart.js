PIE = document.getElementById("pieplot");

let negaraPieChart = [];
let populasiPieChart = [];
let otherPopulation = 0;

d3.csv("data/pops_sorted.csv", function (csv) {
  // Load data 4 negara populasi terbanyak
  for (let i = 0; i < 4; i++) {
    negaraPieChart.push(csv[i].Country);
    populasiPieChart.push(parseInt(csv[i].Population));
  }

  // Load data populasi sisanya
  for (let j = 3; j < csv.length; j++) {
    otherPopulation += parseInt(csv[j].Population);
  }

  var data = [
    {
      labels: [...negaraPieChart, "Other"],
      values: [...populasiPieChart, otherPopulation],
      type: "pie",
      hole: 0.45,
      direction: "clockwise",
      marker: {
        colors: [
          "#0B0742",
          "#120C6E",
          "#5E72EB",
          "#FF9190",
          "#FDC094",
          "#E8A49C",
          "#F04393",
          "#3C4CAD",
        ],
      },
      rotation: 153,
    },
  ];

  var layout = {
    title: `World Population <br> Share (2020)`,
    font: {
      family: "Plus Jakarta Sans",
      size: 13,
    },
    legend: { orientation: "h" },
    width: 300,
    height: 400,
    margin: {
      b: 10,
    },
  };
  var config = { responsive: true };
  Plotly.newPlot(PIE, data, layout, config);
});
