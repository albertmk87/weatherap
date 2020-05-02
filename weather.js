
class Weather {
	constructor(cityName){

		this.cityName=cityName;
		this.key="ad9d151e547ba362b8a331e93e4853a6";
		
	}

	async getResults(){
	let url=`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.key}`;
	 let obj = await (await fetch(url)).json();
	 this.result=obj;
	}
	
}

