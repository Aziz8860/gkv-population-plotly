MAPSCONTINENTSOUTHAMERICA = document.getElementById("mapschartsouthamerica");

d3.csv("data/world_pops_continent.csv", function (csv4) {
  let negaraMapsChartSA = [];
  let populasiMapsChartSA = [];

  csv4.map(function (d) {
    if (d["Continent"] == "SA") {
      negaraMapsChartSA.push(d["Country"]);
      populasiMapsChartSA.push(parseInt(d["Population (2020)"]));
    }
  });

  var colorscale = [
    [0, "#feebe2"],
    [0.4, "#fbb4b9"],
    [0.6, "#f768a1"],
    [0.8, "#c51b8a"],
    [1, "#7a0177"],
  ];

  var data = [
    {
      type: "choropleth",
      locationmode: "country names",
      locations: negaraMapsChartSA,
      z: populasiMapsChartSA,
      text: negaraMapsChartSA,
      colorscale: colorscale,
      autocolorscale: false,
      reversescale: false,
    },
  ];

  var layout = {
    title: "Populasi di Benua Amerika Selatan",
    font: {
      family: "Plus Jakarta Sans",
      size: 18,
    },
    geo: {
      scope: "south america",
      projection: {
        type: "equirectangular",
      },
    },
  };
  Plotly.newPlot(MAPSCONTINENTSOUTHAMERICA, data, layout, { showLink: false });
});
