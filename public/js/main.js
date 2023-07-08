const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');


const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

// data_hide class 
const datahide = document.querySelector('.middle_layer');

// event is passed so that it will not auto refresh
const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    // if search is empty
    if(cityVal == ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');

    } else{
        // try-catch to catch wrong input text 
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=44830040ab1f811cd036393d9ce19a5a`
            const response = await fetch(url);
            // json data converted into Object
            const data = await response.json();
            const arrData = [data]; // array of object
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            
            // temp_status
            const tempMood = arrData[0].weather[0].main;


            //condition to check sunny or cloudy without cdn
	      if (tempMood == "Clear") {
	        temp_status.innerHTML =
        "<i class='fas fa-sun' style='color: #d4ff00;'></i>";
	      } else if (tempMood == "Clouds") {
	        temp_status.innerHTML =
        "<i class='fas fa-cloud' style='color: #cdcda8;'></i>";
	      } else if (tempMood == "Rain") {
	        temp_status.innerHTML =
        "<i class='fas fa-cloud-rain' style='color: #003ea8;'></i>";
	      } 
        else {
	        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #d4ff00;'></i>";
	      }
          datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Plz enter the city name properly`;
            datahide.classList.add('data_hide');

        }

    }
}

submitBtn.addEventListener('click', getInfo);

// date and time info of top_layer in tempInfo
const getCurrentDay = () => {
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";


        let currentTime = new Date();
        let days = weekday[currentTime.getDay()];
        let day = document.getElementById('day');
        day.innerText = days;
      };

      getCurrentDay();

        let today_data = document.getElementById('today_data');
      const getCurrentDate = () => {
        var months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ];
          let now = new Date();
        let month = months[now.getMonth() ];
        let date = now.getDate();
        return `${date} ${month}`;
          };
        today_data.innerText = getCurrentDate();
