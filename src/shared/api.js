import fetch from 'isomorphic-fetch';

export function fetchWheather(){
	const url = 'http://samples.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22'
	return fetch(url)
		.then((data) => data.json())
		.then((response) => response )
		.catch((error) => {
			console.warn(error)
			return null
		})

}