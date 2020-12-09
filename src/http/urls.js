const BASE_COCTAILS_URL = "https://www.thecocktaildb.com/api/json/v1";
const BASE_FILMS_URL = "http://www.omdbapi.com/";
const api_key = "1";
// const films_api_key = "79ac6";
const films_api_key = "79ac68bc";

const coctailsUrls = {
  random: `${BASE_COCTAILS_URL}/${api_key}/random.php`,
  search: `${BASE_COCTAILS_URL}/${api_key}/search.php?s=`,
  categories: `${BASE_COCTAILS_URL}/${api_key}/list.php?c=list`,
  glasses: `${BASE_COCTAILS_URL}/${api_key}/list.php?g=list`,
  ingredients: `${BASE_COCTAILS_URL}/${api_key}/list.php?i=list`,
  alcoholic: `${BASE_COCTAILS_URL}/${api_key}/list.php?a=list`,
  lookup: `${BASE_COCTAILS_URL}/${api_key}/lookup.php?i=`,
};

const filmsUrls = {
  search: (query, page = 1) =>
    `${BASE_FILMS_URL}?apikey=${films_api_key}&s=${query}&page=${page}`,
  filmDetails: (id) =>
    `${BASE_FILMS_URL}?apikey=${films_api_key}&i=${id}&plot=true`,
};

export { coctailsUrls, filmsUrls };
