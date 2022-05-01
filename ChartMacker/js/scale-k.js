    var jsonData = require('../nested_json.json');
    console.log(jsonData, 'the json obj');

    fetch("nested_json.json")
      .then(response => response.json())
      .then(json => obj = JSON.parse(json));



//     function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
//     }
//
//     //usage:
//     readTextFile("nested_json.json", function(text){
//         var emotions = JSON.parse(text);
//     });

    var emotions = JSON.parse(text);

    var frame = "0";
    var myConfig = {
      type: 'radar',
      plot: {
        aspect: 'area',
        animation: {
          effect: 3,
          sequence: 1,
          speed: 700
        }
      },
      scaleV: {
        visible: false
      },
      scaleK: {
        values: '0:6:1',
        labels: ['Anger', 'Happiness', 'Fear', 'Disgust', 'Sadness', 'Surprise', "Neutral"],
        item: {
          fontColor: '#607D8B',
          backgroundColor: "white",
          borderColor: "#aeaeae",
          borderWidth: 1,
          padding: '5 10',
          borderRadius: 10,
        },
        refLine: {
          lineColor: '#c10000'
        },
        tick: {
          lineColor: '#59869c',
          lineWidth: 2,
          lineStyle: 'dotted',
          size: 20
        },
        guide: {
          lineColor: "#607D8B",
          lineStyle: 'solid',
          alpha: 0.3,
          backgroundColor: "#c5c5c5 #718eb4"
        },
        tooltip: {
          text: '%data-test'
        }
      },
      series: [
        {
          //values: [20, 20, 54, 41, 41, 35, 12],
          values: [emotions[frame]["anger"], emotions[frame]["happiness"], emotions[frame]["fear"], emotions[frame]["disgust"], emotions[frame]["sadness"], emotions[frame]["surprise"], emotions[frame]["neutral"]],
          lineColor: '#c142a6',
          backgroundColor: '#c142a6'
        }
      ]
    };

    zingchart.render({
      id: 'myChart',
      data: myConfig,
      height: '100%',
      width: '100%'
    });

