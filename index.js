const {getBrands} = require('node-car-api');

const brands = await getBrands();

console.log(brands);