let climate_daily_data = [
  { year: 2010, co2: 389.85 },
  { year: 2011, co2: 391.63 },
  { year: 2012, co2: 393.82 },
  { year: 2013, co2: 396.48 },
  { year: 2014, co2: 398.65 },
  { year: 2015, co2: 400.83 },
  { year: 2016, co2: 404.24 },
  { year: 2017, co2: 406.55 },
  { year: 2018, co2: 408.52 },
  { year: 2019, co2: 411.44 },
];

let toggleClass = (i, toggle) => {
  d3.select("#viz div:nth-child(" + i + ")").classed("highlightBar", toggle);
  d3.select("#legend li:nth-child(" + i + ")").classed("highlightText", toggle);
};

const divSelection = d3.select("#viz").selectAll("div");

divSelection
  .data(climate_daily_data)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("width", function (d) {
    return `${d.co2}px`;
  })
  .on("mouseover", function (_, d) {
    let i = climate_daily_data.indexOf(d) + 1;
    toggleClass(i, true);
  })
  .on("mouseout", function (_, d) {
    let i = climate_daily_data.indexOf(d) + 1;
    toggleClass(i, false);
  });

const listSelection = d3.select("#legend").selectAll("li");

listSelection
  .data(climate_daily_data)
  .enter()
  .append("li")
  .text(function (d) {
    return `${d.year}: ${d.co2}`;
  })
  .on("mouseover", function (_, d) {
    let i = climate_daily_data.indexOf(d) + 1;
    toggleClass(i, true);
  })
  .on("mouseout", function (_, d) {
    let i = climate_daily_data.indexOf(d) + 1;
    toggleClass(i, false);
  });
