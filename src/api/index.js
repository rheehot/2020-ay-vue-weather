import axios from 'axios';
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
	return { daily: daily.data, weekly: weekly.data };
}

export { axCity, axWeather, ICON_URL }