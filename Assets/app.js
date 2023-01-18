const curWeathExample = 
{
    "coord": {
      "lon": 10.99,
      "lat": 44.34
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 298.48,
      "feels_like": 298.74,
      "temp_min": 297.56,
      "temp_max": 300.05,
      "pressure": 1015,
      "humidity": 64,
      "sea_level": 1015,
      "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.62,
      "deg": 349,
      "gust": 1.18
    },
    "rain": {
      "1h": 3.16
    },
    "clouds": {
      "all": 100
    },
    "dt": 1661870592,
    "sys": {
      "type": 2,
      "id": 2075663,
      "country": "IT",
      "sunrise": 1661834187,
      "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
  }                     

const forecastExample = 
{
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1661871600,
        "main": {
          "temp": 296.76,
          "feels_like": 296.98,
          "temp_min": 296.76,
          "temp_max": 297.87,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 933,
          "humidity": 69,
          "temp_kf": -1.11
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 0.62,
          "deg": 349,
          "gust": 1.18
        },
        "visibility": 10000,
        "pop": 0.32,
        "rain": {
          "3h": 0.26
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-08-30 15:00:00"
      },
      {
        "dt": 1661871600,
        "main": {
          "temp": 296.76,
          "feels_like": 296.98,
          "temp_min": 296.76,
          "temp_max": 297.87,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 933,
          "humidity": 69,
          "temp_kf": -1.11
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 0.62,
          "deg": 349,
          "gust": 1.18
        },
        "visibility": 10000,
        "pop": 0.32,
        "rain": {
          "3h": 0.26
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-08-30 15:00:00"
      },
      {
        "dt": 1661882400,
        "main": {
          "temp": 295.45,
          "feels_like": 295.59,
          "temp_min": 292.84,
          "temp_max": 295.45,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 931,
          "humidity": 71,
          "temp_kf": 2.61
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 1.97,
          "deg": 157,
          "gust": 3.39
        },
        "visibility": 10000,
        "pop": 0.33,
        "rain": {
          "3h": 0.57
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-08-30 18:00:00"
      },
      {
        "dt": 1661893200,
        "main": {
          "temp": 292.46,
          "feels_like": 292.54,
          "temp_min": 290.31,
          "temp_max": 292.46,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 931,
          "humidity": 80,
          "temp_kf": 2.15
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 2.66,
          "deg": 210,
          "gust": 3.58
        },
        "visibility": 10000,
        "pop": 0.7,
        "rain": {
          "3h": 0.49
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-08-30 21:00:00"
      },
      {
        "dt": 1662292800,
        "main": {
          "temp": 294.93,
          "feels_like": 294.83,
          "temp_min": 294.93,
          "temp_max": 294.93,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 935,
          "humidity": 64,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 1.14,
          "deg": 17,
          "gust": 1.57
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-09-04 12:00:00"
      }
    ],
    "city": {
      "id": 3163858,
      "name": "Zocca",
      "coord": {
        "lat": 44.34,
        "lon": 10.99
      },
      "country": "IT",
      "population": 4593,
      "timezone": 7200,
      "sunrise": 1661834187,
      "sunset": 1661882248
    }
  }

//TODO: 
// Make functions to save the search to local storage and then function to make an api call for each,
// coordinates and Weather pull
searchHistory();
var hList = document.getElementsByClassName("hist");

for(var a in hList){
    if (document.getElementById(a)!== null){
        document.getElementById(a).addEventListener("click", histSearch(document.getElementById(a).textContent));
    }
}


document.getElementById("btn").addEventListener("click", findWeather);

const london = {lat:51.5072, lon:0.1276};
const apiKey = "1680db663cd3110d3572d42cfad8dc73";


async function findLoc(city_name){

    
    let response = await fetch("http://api.openweathermap.org/geo/1.0/direct?q={"+ city_name + "}&limit={1}&appid={ " + apiKey +"}");
    let data = await response.json();
    return data;
}

async function findWeather(){
    console.log("start")
    var city_name = document.getElementById("cityInput").value;

    saveSearch(city_name);
/*
    var locData = findLoc(city_name);

    console.log(locData);
*/
/*
    var lat = london.lat;
    var lon = london.lon;
    */
   // let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat={"+ lat +"}&lon={"+ lon +"}&appid={" + apiKey +"}");

   // let forecastResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat={" + lat + "}&lon={" + lon + "}&appid={1680db663cd3110d3572d42cfad8dc73}");
    
    let response = curWeathExample;
    let forecastResponse = forecastExample;

    var temp = response.main.temp;
    var wind = response.wind.gust;
    var hum = response.main.humidity;

    console.log("temp: " + temp + ", wind: " + wind + ", hum: " + hum);

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;
    

    document.getElementById("cityCardNameDate").textContent = city_name + " " + currentDate; 
    document.getElementById("cityCardTemp").textContent = "Temp: " + temp;
    document.getElementById("cityCardWind").textContent = "Wind: " + wind;
    document.getElementById("cityCardHum").textContent = "Humidity: " + hum;

  
    forecastCards(forecastResponse);




}

function forecastCards(forecastResponse){
    const cards = document.getElementsByClassName("forecast");
    const cardDate = document.getElementsByClassName("foreDate");
    const temps = document.getElementsByClassName("foreTemp");
    const winds = document.getElementsByClassName("foreWind");
    const hums = document.getElementsByClassName("foreHum");

    var forecastBlock = document.getElementById("forecastBlock");
    

    for(var i=0; i<5;i++){
        //getDate
        //gettemp
        //getwind
        //gethum
        response = forecastResponse.list[i];

        var date = response.dt_txt;
        var temp = response.main.temp;
        var wind = response.wind.gust;
        var hum = response.main.humidity;
        var currentCard = cards[i];
        var CCdate = cardDate[i]
        var CCTemp = temps[i];
        var CCwind = winds[i];
        var CChum = hums[i];
        CCdate.textContent = date;
        CCTemp.textContent = temp;
        CCwind.textContent = wind;
        CChum.textContent = hum;



    }


}


function saveSearch(search){
    //saves search to localStorage
    localStorage.setItem(search, search);
}

function searchHistory(){
    
    var history = [];

    for (var a in localStorage) {

        if(a !== "length"){
            console.log(a, ' = ', localStorage[a]);
            history.push(a);

        }else{
            break;
        }
     }
     console.log(history);
     showSearchHistory(history);

}

function showSearchHistory(history){
    var histBlock = document.getElementById("SearchHistoryBlock");
    var limit = 5;
    if(history.length <= 5 ){
        limit = history.length;
    }
    for(var i =0; i<limit; i++){
        var histitem = document.createElement("p");
        var currentHist = history.pop();
        histitem.textContent = currentHist;
        histitem.className = "hist text-center";
        histitem.id = i;
        
        histBlock.append(histitem);

    }
    
    

}
function histSearch(name){
    
    document.getElementById("cityInput").value = name;
    findWeather();
}