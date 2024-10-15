var spec1 = "js/Emmission_map.vg.json";
vegaEmbed('#choropleth_map', spec1).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var spec2 = "js/Emmission_bar_chart.vg.json";
vegaEmbed('#stacked_bar_chart', spec2).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var spec3 = "js/Emission_4.vg.json";
vegaEmbed('#line_chart', spec3).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var spec4 = "js/Emission_5.vg.json";
vegaEmbed('#bubble_chart', spec4).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var spec5 = "js/Emission_6.vg.json";
vegaEmbed('#heat_map', spec5).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);