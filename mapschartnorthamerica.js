MAPSCONTINENTNORTHAMERICA = document.getElementById("mapschartnorthamerica");

d3.csv("data/world_pops_continent.csv", function (csv4) {
  let negaraMapsChartNA = [];
  let populasiMapsChartNA = [];

  csv4.map(function (d) {
    if (d["Continent"] == "NA") {
      negaraMapsChartNA.push(d["Country"]);
      populasiMapsChartNA.push(parseInt(d["Population (2020)"]));
    }
  });

  var colorscale = [
    [0, "#f1eef6"],
    [0.4, "#bdc9e1"],
    [0.6, "#74a9cf"],
    [0.8, "#2b8cbe"],
    [1, "#045a8d"],
  ];

  var data = [
    {
      type: "choropleth",
      locationmode: "country names",
      locations: negaraMapsChartNA,
      z: populasiMapsChartNA,
      text: negaraMapsChartNA,
      colorscale: colorscale,
      autocolorscale: false,
      reversescale: false,
    },
  ];

  var layout = {
    title: "Populasi di Benua Amerika Utara",
    font: {
      family: "Plus Jakarta Sans",
      size: 18,
    },
    geo: {
      scope: "north america",
      projection: {
        type: "equirectangular",
      },
    },
  };
  Plotly.newPlot(MAPSCONTINENTNORTHAMERICA, data, layout, { showLink: false });
});
