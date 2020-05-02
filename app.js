
let defaultCityName;

const cityJSON=localStorage.getItem("defaultCityName");

if(cityJSON!==null) {
	defaultCityName=JSON.parse(cityJSON);
}else{
	defaultCityName="Skopje"
}


const getCityWeather= async (cityName) =>{
	// if(cityName===""){
	// 	cityName="Skopje";
	// }
	const city=new Weather(cityName);
	const ui=new UI();
	await city.getResults();
	const cityObj=city.result;
	ui.getCelsius();
	ui.fillDOM(cityObj);

	console.log(cityObj);
	console.log(ui);
}


window.addEventListener("load", getCityWeather(defaultCityName));

const inputCity=document.querySelector("#city");

const changeBtn=document.querySelector("#w-changeBtn");

changeBtn.addEventListener("click", e=>{

	defaultCityName=inputCity.value;
	 localStorage.setItem("defaultCityName", JSON.stringify(defaultCityName));
	getCityWeather(defaultCityName);
	
})

// document.querySelector("#aaa").addEventListener("click", e=>{
// 	console.log("AAAAA");
// 	getCityWeather();
// })
