export default () => {
	navigator.geolocation.getCurrentPosition((res) => {
		console.log('----- location -----');
		console.log(res);
		console.log('----- location -----');
		return { err:null, res }
	}, (err) => {
		console.log(err);
		return { err: err, res: null }
	});
}