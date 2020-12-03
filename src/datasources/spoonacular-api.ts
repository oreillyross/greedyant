// https://rapidapi.com/spoonacular/api/recipe-food-nutrition?endpoint=5615b90de4b07657ce637c99

import axios from 'axios'

var options = {
  method: 'GET',
  url: process.env.RAPIDAPI_URL,
  params: {query: 'potatoes', number: '10', intolerances: 'egg'},
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.RAPIDAPI_HOST
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});