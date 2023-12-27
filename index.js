const image = document.querySelector('img');
const container = document.querySelector('.container');
const countryName = document.getElementById('countryName');
const countries = [
  'Algeria',
  'Bahrain',
  'Comoros',
  'Djibouti',
  'Egypt',
  'Iraq',
  'Jordan',
  'Kuwait',
  'Lebanon',
  'Libya',
  'Mauritania',
  'Morocco',
  'Oman',
  'Palestine',
  'Qatar',
  'Saudi Arabia',
  'Somalia',
  'Sudan',
  'Syria',
  'Tunisia',
  'United Arab Emirates',
  'Yemen',
];
let counter = 0;
const countriesApi = function (countryName) {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.json())
    .then((countryData) => {
      container.style.backgroundImage = `url(${countryData[0].flags.svg})`;
    });
};

setInterval(function () {
  if (counter === countries.length) {
    counter = 0;
  }
  countriesApi(countries[counter]);
  countryName.textContent = null;
  counter++;
}, 2000);

container.onclick = function () {
  countryName.textContent = `'${countries[counter - 1] ?? 'unfound'}'`;
};

console.log('rakha');
