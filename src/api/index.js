import axios from 'axios';
import { cities } from './city';
import location from './location';

const APP_ID = '02efdd64bdc14b279bc91d9247db4722';
const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEEKLY_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const ICON_URL = 'http://openweathermap.com/img/wn/' //01d@2x.png



function axCity() {
	const result = location();
	console.log('----- api/index -----');
	console.log(result);
	console.log('----- api/index -----');
	return cities;
}

async function axDaily(city) {
	// const result = await axios.get(url, params);
	return await axios.get(DAILY_URL, {params: {units: "metric", appid: APP_ID, id: city}});
}

function axWeekly() {
	return;
}

export { axCity, axDaily, axWeekly, ICON_URL }