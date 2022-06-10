MAPSCONTINENTAFRICA = document.getElementById("mapschartafrica");

d3.csv("data/world_pops_continent.csv", function (csv4) {
  let negaraMapsChartAfrica = [];
  let populasiMapsChartAfrica = [];

  csv4.map(function (d) {
    if (d["Continent"] == "AF") {
      negaraMapsChartAfrica.push(d["Country"]);
      populasiMapsChartAfrica.push(parseInt(d["Population (2020)"]));
    }
  });

  var colorscale = [
    [0, "#f2f0f7"],
    [0.4, "#cbc9e2"],
    [0.6, "#9e9ac8"],
    [0.8, "#756bb1"],
    [1, "#54278f"],
  ];

  var data = [
    {
      type: "choropleth",
      locationmode: "country names",
      locations: negaraMapsChartAfrica,
      z: populasiMapsChartAfrica,
      text: negaraMapsChartAfrica,
      colorscale: colorscale,
      autocolorscale: false,
      reversescale: false,
    },
  ];

  var layout = {
    title: "Populasi di Benua Afrika",
    font: {
      family: "Plus Jakarta Sans",
      size: 18,
    },
    geo: {
      scope: "africa",
      projection: {
        type: "equirectangular",
      },
    },
  };
  Plotly.newPlot(MAPSCONTINENTAFRICA, data, layout, { showLink: false });
});
