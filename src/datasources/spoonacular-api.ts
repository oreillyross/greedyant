// https://rapidapi.com/spoonacular/api/recipe-food-nutrition?endpoint=5615b90de4b07657ce637c99
//TODO Subscirbe to the freemium plan once you have a credit card for company

import axios from "axios";

console.log(process.env.REACT_APP_RAPIDAPI_URL);

const options = {
  url: process.env.REACT_APP_RAPIDAPI_URL,
  params: { query: "potatoes", number: "10" },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
    "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export { options };
