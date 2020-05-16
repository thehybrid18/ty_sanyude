var trace1 = {
    locations: ["AK",
  "AZ",
  "CA",
  "CO",
  "HI",
  "ID",
  "KS",
  "MI",
  "MN",
  "MT",
  "ND",
  "NE",
  "NM",
  "OH",
  "OK",
  "SD",
  "UT",
  "WI",
  "WY"],
    z: [34,
  57,
  10,
  15,
  1,
  1,
  6,
  94,
  33,
  3,
  84,
  26,
  48,
  25,
  1,
  33,
  12,
  10,
  59],
    type: 'choropleth',
    locationmode: 'USA-states',
    colorscale: [
                [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
    ],
    xaxis: 'x1',
    yaxis: 'y1',
    
  };
  
  var trace2 = {
    values: [144,
  187,
  246,
  180,
  578],
    labels: ['Cancel - Pt Going Ground',
  'Cancel - Pt Staying at Facility',
  'Decline - Asset Committed',
  'Decline - No Pilot',
  'Decline - Weather'],
    type: 'pie',
    name: 'TOP 5 LOST REASONS',
    
    
  };
  
  var trace3 = {
    x: [0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  21,
  22,
  23],
    y: [85,
  72,
  76,
  60,
  52,
  42,
  46,
  39,
  69,
  74,
  86,
  82,
  111,
  117,
  122,
  122,
  113,
  129,
  147,
  127,
  122,
  105,
  103],
    type: 'scatter',
    name: 'HOURLY TREND'
  };
  
  var trace4 = {
    x: [0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  21,
  22,
  23],
    y: [93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667,
  93.41666667],
    type: 'scatter',
    name: '(average)'
  };
  
  var data = [trace1];
  var data2= [trace2];
  var data3= [trace3, trace4]
  
  var layout = { geo:{scope:'usa'},
    title: 'LOST FLIGHTS BY REGION',
    
    
  };
  var layout2 = {title: 'TOP 5 LOST REASONS'};
  var layout3 = { title: 'Hourly trend',
  xaxis: {
    tickmode: "linear", 
    tick0: 0,
    dtick: 2
  }
    
    
   
  };
  
  Plotly.newPlot('plot1', data, layout);
  Plotly.newPlot('plot2', data2, layout2);
  
  
  
  