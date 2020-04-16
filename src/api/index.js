import axios from 'axios';
import moment from 'moment';
import { cities } from './city';
import location from './location';


const APP_ID = '02efdd64bdc14b279bc91d9247db4722';
const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEEKLY_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const ICON_URL = 'http://openweathermap.com/img/wn/' //01d@2x.png

function axCity() {
	return cities;
}

async function axWeather(city) {
	const params = { units: "metric", appid: APP_ID }
	if(city) {
		params.id = city;
	}
	else {
		const { res } = await location();
		params.lat = res.lat;
		params.lon = res.lon;
	}
	const daily = await axios.get(DAILY_URL, {params});
	const weekly = await axios.get(WEEKLY_URL, {params});
	//daily.data.weather[0].icon = ICON_URL + daily.data.weather[0].icon + "@2x.png";
	daily.data.weather[0].icon = "/icon/" + daily.data.weather[0].icon + ".png";
	for(let v of weekly.data.list) {
		// v.weather[0].icon = ICON_URL + v.weather[0].icon + "@2x.png";
		v.weather[0].icon = "/icon/" + v.weather[0].icon + ".png";
		v.dt = moment(Number(v.dt)*1000).format('YYYY-MM-DD HH시');
	}
	return { daily: daily.data, weekly: weekly.data };
}

export { axCity, axWeather }