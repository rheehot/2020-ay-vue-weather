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

async function geoCoords() {
	const { err, res } = await location();
	return await axios.get(DAILY_URL, {params: {units: "metric", appid: APP_ID, lat: res.lat, lon: res.lon}});
}

async function axDaily(city) {
	// const result = await axios.get(url, params);
	return await axios.get(DAILY_URL, {params: {units: "metric", appid: APP_ID, id: city}});
}

function axWeekly() {
	return;
}

export { axCity, axDaily, axWeekly, geoCoords, ICON_URL }