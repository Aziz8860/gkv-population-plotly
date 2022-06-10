MAPSCONTINENTASIA = document.getElementById("mapschartasia");

d3.csv("data/world_pops_continent.csv", function (csv4) {
  let negaraMapsChartAsia = [];
  let populasiMapsChartAsia = [];

  csv4.map(function (d) {
    if (d["Continent"] == "AS") {
      negaraMapsChartAsia.push(d["Country"]);
      populasiMapsChartAsia.push(parseInt(d["Population (2020)"]));
    }
  });

  var colorscale = [
    [0, "#f6eff7"],
    [0.4, "#bdc9e1"],
    [0.6, "#67a9cf"],
    [0.8, "#1c9099"],
    [1, "#016c59"],
  ];

  var data = [
    {
      type: "choropleth",
      locationmode: "country names",
      locations: negaraMapsChartAsia,
      z: populasiMapsChartAsia,
      text: negaraMapsChartAsia,
      colorscale: colorscale,
      autocolorscale: false,
      reversescale: false,
    },
  ];

  var layout = {
    title: "Populasi di Benua Asia",
    font: {
      family: "Plus Jakarta Sans",
      size: 18,
    },
    geo: {
      scope: "asia",
      projection: {
        type: "equirectangular",
      },
    },
  };
  Plotly.newPlot(MAPSCONTINENTASIA, data, layout, { showLink: false });
});
