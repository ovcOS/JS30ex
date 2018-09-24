const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(url)
  .then(whatever => whatever.json())
  .then(stuff => cities.push(...stuff));

function findMatch(inputWord, cities){
  return cities.filter(place => {
    let regex = new RegExp(inputWord, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  })
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatch(){
  const matchArray = findMatch(this.value, cities);
  const result = matchArray.map(place => {
    return `
      <li>
        <span class="name">${place.city}, ${place.state}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestionBox.innerHTML = result;
}

let searchBox = document.querySelector('.search');
let suggestionBox = document.querySelector('.suggestions');

searchBox.addEventListener('change', displayMatch);
searchBox.addEventListener('keyup', displayMatch);
