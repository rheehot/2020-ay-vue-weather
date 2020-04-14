import axios from 'axios';

const appid = '02efdd64bdc14b279bc91d9247db4722';
const dailyURL = 'https://api.openweathermap.org/data/2.5/weather';
const weeklyURL = 'https://api.openweathermap.org/data/2.5/forecast';

const cities = [
	{ "name": "서울", "id": 1835848 },
	{ "name": "인천", "id": 1843564 },
	{ "name": "부산", "id": 1838722 },
	{ "name": "대전", "id": 1835235 },
	{ "name": "대구", "id": 1835329 },
	{ "name": "제주", "id": 1846266 },
	{ "name": "광주", "id": 1841810 },
	{ "name": "목포", "id": 1841066 },
];

function axCity() {
	return cities;
}

async function axDaily(city) {
	// const result = await axios.get(url, params);
	return await axios.get(dailyURL, {params: {units: "metric", appid: appid, id: city}});
}

function axWeekly() {
	return;
}

export { axCity, axDaily, axWeekly }