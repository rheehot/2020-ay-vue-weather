export default () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((res) => {
			resolve({ err:null, res: {lat: res.coords.latitude, lon: res.coords.longitude} });
		}, (err) => {
			console.log(err);
			reject({ err: err, res: null });
		});
	});
}