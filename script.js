//688c0777584fd7164ff2dfe24c5ad896
//Variables
const api_key = "688c0777584fd7164ff2dfe24c5ad896";

const input_city = document.querySelector("#input_city");

const city_html = document.querySelector("#h1_city");

const temp = document.querySelector("#temp");
const high_temp = document.querySelector("#high_temp");
const lower_temp = document.querySelector("#lower_temp");

const climate = document.querySelector("#climate");


const suggestions = document.querySelector("#suggestions");

//Variables cards
const feels = document.querySelector("#feels");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const visibility = document.querySelector("#visibility");
const pressure = document.querySelector("#pressure");
const sea_level = document.querySelector("#sea_level");

//Variables forecast cards
const forecast_1 = document.querySelector("#forecast_1");
const forecast_2 = document.querySelector("#forecast_2");
const forecast_3 = document.querySelector("#forecast_3");
const forecast_4 = document.querySelector("#forecast_4");
const forecast_5 = document.querySelector("#forecast_5");

const forecast_1_temp = document.querySelector("#forecast_1_temp");
const forecast_2_temp = document.querySelector("#forecast_2_temp");
const forecast_3_temp = document.querySelector("#forecast_3_temp");
const forecast_4_temp = document.querySelector("#forecast_4_temp");
const forecast_5_temp = document.querySelector("#forecast_5_temp");


climate_search(input_city.value = "london");


// Functions
function change_html(data){

    city_html.innerHTML = `${data.name}, ${data.sys.country}`;
    temp.innerHTML = `${Math.floor(data.main.temp)}°C`;
    high_temp.innerHTML = `Max: ${Math.floor(data.main.temp_max)}°C`;
    lower_temp.innerHTML = `Min: ${Math.floor(data.main.temp_min)}°C`;
    climate.innerHTML = data.weather[0].description;

    //cards
    feels.innerHTML =`Feels Like: ${Math.round(data.main.feels_like)}°C`;
    humidity.innerHTML =`${data.main.humidity}%`;
    wind.innerHTML =`${data.wind.speed}km/h`
    visibility.innerHTML = `${data.visibility/1000} km`;
    pressure.innerHTML =`${data.main.pressure}hPa`
    sea_level.innerHTML =`${data.main.sea_level}`

}

function change_forecast(data){

    forecast_1.innerHTML = data.list[0].dt_txt.split(" ")[1].slice(0,5);//separando data da hora
    forecast_1_temp.innerHTML = (`${Math.floor(data.list[0].main.temp)}°C`)

    forecast_2.innerHTML = data.list[1].dt_txt.split(" ")[1].slice(0,5);
    forecast_2_temp.innerHTML = (`${Math.floor(data.list[1].main.temp)}°C`)

    forecast_3.innerHTML = data.list[2].dt_txt.split(" ")[1].slice(0,5);
    forecast_3_temp.innerHTML = (`${Math.floor(data.list[2].main.temp)}°C`)

    forecast_4.innerHTML = data.list[3].dt_txt.split(" ")[1].slice(0,5);
    forecast_4_temp.innerHTML = (`${Math.floor(data.list[3].main.temp)}°C`)

    forecast_5.innerHTML = data.list[4].dt_txt.split(" ")[1].slice(0,5);
    forecast_5_temp.innerHTML = (`${Math.floor(data.list[4].main.temp)}°C`)

}

async function climate_search() {

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input_city.value}&appid=${api_key}&units=metric`
    );

    const data = await response.json();

    const response_forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input_city.value}&appid=${api_key}&units=metric`);

    const forecast_data = await response_forecast.json();


    change_html(data);
    change_forecast(forecast_data);

      
}

// Events

input_city.addEventListener("change", () => {//mudar para input dinamico
    climate_search();
});

/*
input_city.addEventListener("change", () =>{
    async function input_search(){
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input_city.value}&limit=5&appid=${api_key}`)

        const list = await response.json()
        console.log(list)
    }  
    input_search();
    })
*/


/*
ANOTAÇÕES:
"await" faz com que o sistema espera o comando ter um retorno para continuar
"fetch" faz uma requisição a uma api por meio de URL

*/