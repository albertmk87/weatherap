

class UI {
	constructor(){
		this.location=document.querySelector("#w-location");
		this.description=document.querySelector("#w-desc");
		this.string=document.querySelector("#w-string");
		this.details=document.querySelector("#w-details");
		this.humidity=document.querySelector("#w-humidity");
		this.min=document.querySelector("#w-dewpoint");
		this.feelsLike=document.querySelector("#w-feels-like");
		this.wind=document.querySelector("#w-wind");
		this.inputCityValue=document.querySelector("#city");
	}

	getInputValue() {
		return this.inputCityValue.value;
	}

	

	fillDOM(city) {

		this.celsius=city.main.temp;
		this.minTemp=city.main.temp_min;
		this.feelsLikeTemp=city.main.feels_like;
		this.getCelsius();
		this.location.textContent=city.name;
		this.description.textContent=city.weather[0].description;
		this.string.textContent=`${this.celsius}C`;
		this.humidity.textContent=`Humidity:${city.main.humidity}`;
		this.min.textContent=`Min temp:${this.minTemp}C`;
		this.feelsLike.textContent=`Feels like:${this.feelsLikeTemp}C`;
		this.wind.textContent=`Wind:${city.wind.speed}kph`

	}

	getCelsius(){
	
		this.celsius=Math.ceil(parseInt(this.celsius)-273.15);
		this.minTemp=Math.ceil(parseInt(this.minTemp)-273.15);
		this.feelsLikeTemp=Math.ceil(parseInt(this.feelsLikeTemp)-273.15);
	}
}