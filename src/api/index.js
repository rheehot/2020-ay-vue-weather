import axios from 'axios';

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

function axDaily() {
	return;
}

function axWeekly() {
	return;
}

export { axCity, axDaily, axWeekly }