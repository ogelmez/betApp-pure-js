
var sumsTimes = [3, 4, 5, 6, 7, 8]
var json = [
  {
    "matchId": "474",
    "matchTitle": "Kashima - Cerezo Osaka",
    "rating": [2.30, 3.10, 2.35],
    "homeYellowId": "1201",
    "drawYellowId": "1301",
    "awayYellowId": "1401",
    "percent": [30.00, 30.00, 40.00],
    "sideId": [201,202,203]

  },
  {
    "matchId": "475",
    "matchTitle": "K. Sanuki - Machida Zelvia",
    "rating": [3.60, 3.20, 1.65],
    "homeYellowId": "1202",
    "drawYellowId": "1302",
    "awayYellowId": "1402",
    "percent": [95.00, 2.50, 2.50],
    "sideId": [301,302,303]
  },
  {
    "matchId": "477",
    "matchTitle": "Jeonnam Dragons - Daegu",
    "rating": [2.50, 3.10, 2.10],
    "homeYellowId": "1203",
    "drawYellowId": "1303",
    "awayYellowId": "1403",
    "percent": [25.00, 50.00, 25.00],
    "sideId": [401,402,403]
  },
  {
    "matchId": "478",
    "matchTitle": "Ulsan - Suwon Sb",
    "rating": [1.85, 3.20, 2.90],
    "homeYellowId": "1204",
    "drawYellowId": "1304",
    "awayYellowId": "1404",
    "percent": [65.00, 15.00, 20.00],
    "sideId": [501,502,503]
  }
];
const state = {
  HOME: '1',
  DRAW: 'X',
  AWAY: '2'
}

var sums = 1;
var matchHomeRating = document.getElementsByClassName("main");

window.onload = function () {
  for (let i = 0; i < this.sumsTimes.length; i++) {
    var option = document.createElement("option");
    option.value = this.sumsTimes[i];
    option.textContent = this.sumsTimes[i];
    document.getElementById("sumsValue").appendChild(option);
  }


  var htmlText = '';
  for (var key in json) {
    htmlText += ' <div class="beat">';
    htmlText += ' <div class="match-name">';
    htmlText += ' <label style="margin-right:20px;">' + json[key].matchId + '</label>';
    htmlText += ' <label><b>' + json[key].matchTitle + '</b></label>';
    htmlText += ' </div>';
    htmlText += '<div class="match-percents">';
    htmlText += ' <div class="home">';
    htmlText += ' <label id ="' + json[key].sideId[0] +'" onclick="chooseRating(' + json[key].homeYellowId + ',' + json[key].rating[0] + ',' + json[key].sideId[0] + ')" class="side">' + state.HOME + '</label>';
    htmlText += ' <label id ="' + json[key].homeYellowId + '" value="' + parseFloat(Math.round(json[key].rating[0] * 100) / 100).toFixed(2) + '" class="percent">' + parseFloat(Math.round(json[key].rating[0] * 100) / 100).toFixed(2) + '</label>';
    htmlText += ' </div>';
    htmlText += ' <div class="draw" > ';
    htmlText += ' <label class="side"  id ="' + json[key].sideId[1] + '" onclick="chooseRating(' + json[key].drawYellowId + ',' + json[key].rating[1] + ',' + json[key].sideId[1] + ')" >' + state.DRAW + '</label>';
    htmlText += ' <label class="percent"  id ="' + json[key].drawYellowId + '">' + parseFloat(Math.round(json[key].rating[1] * 100) / 100).toFixed(2) + '</label>';
    htmlText += '</div>';
    htmlText += ' <div class="away" > ';
    htmlText += ' <label class="side" id ="' + json[key].sideId[2] + '" onclick="chooseRating(' + json[key].awayYellowId + ',' + json[key].rating[2] + ',' + json[key].sideId[2] + ')" >' + state.AWAY + '</label>';
    htmlText += ' <label class="percent" id ="' + json[key].awayYellowId + '">' + parseFloat(Math.round(json[key].rating[2] * 100) / 100).toFixed(2) + '</label>';
    htmlText += '</div>';
    htmlText += '</div>';
    htmlText += '<div class="rating">';
    htmlText += ' <label>%' + parseFloat(Math.round(json[key].percent[0] * 100) / 100).toFixed(2) + '</label>';
    htmlText += ' <label>%' + parseFloat(Math.round(json[key].percent[1] * 100) / 100).toFixed(2) + '</label>';
    htmlText += ' <label>%' + parseFloat(Math.round(json[key].percent[2] * 100) / 100).toFixed(2) + '</label>';
    htmlText += '</div>';
    htmlText += ' </div>';

  }
  for (let i = 0; i < this.json.length; i++) {
    matchHomeRating[i].innerHTML = htmlText;
  }


}
function chooseRating(clicked_id,rating,side) {
  document.getElementById(clicked_id).style.background = "yellow";
  sums *= rating;
  var drpdownValue = document.getElementById("sumsValue").value;
  document.getElementById("sumsTimes").innerHTML = ' <b>' + drpdownValue + ' TL</b>';
  document.getElementById("sumsIncome").innerHTML = ' <b>' + parseFloat(Math.round((sums * drpdownValue) * 100) / 100).toFixed(2) + ' TL</b>';
  document.getElementById(side).style.pointerEvents ="none";
  
}

function changeValue() {
  var drpdownValue = document.getElementById("sumsValue").value;
  document.getElementById("sumsTimes").innerHTML = ' <b>' + drpdownValue + ' TL</b>';
  document.getElementById("sumsIncome").innerHTML = ' <b>' + parseFloat(Math.round((sums * drpdownValue) * 100) / 100).toFixed(2) + ' TL</b>';
}



