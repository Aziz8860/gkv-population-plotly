MAPSCONTINENTEUROPE = document.getElementById("mapscharteurope");

d3.csv("data/world_pops_continent.csv", function (csv4) {
  let negaraMapsChartEurope = [];
  let populasiMapsChartEurope = [];

  csv4.map(function (d) {
    if (d["Continent"] == "EU") {
      negaraMapsChartEurope.push(d["Country"]);
      populasiMapsChartEurope.push(parseInt(d["Population (2020)"]));
    }
  });

  var colorscale = [
    [0, "#ffffd4"],
    [0.4, "#fed98e"],
    [0.6, "#fe9929"],
    [0.8, "#d95f0e"],
    [1, "#993404"],
  ];

  var data = [
    {
      type: "choropleth",
      locationmode: "country names",
      locations: negaraMapsChartEurope,
      z: populasiMapsChartEurope,
      text: negaraMapsChartEurope,
      colorscale: colorscale,
      autocolorscale: false,
      reversescale: false,
    },
  ];

  var layout = {
    title: "Populasi di Benua Eropa",
    font: {
      family: "Plus Jakarta Sans",
      size: 18,
    },
    geo: {
      scope: "europe",
      projection: {
        type: "equirectangular",
      },
    },
  };
  Plotly.newPlot(MAPSCONTINENTEUROPE, data, layout, { showLink: false });
});
