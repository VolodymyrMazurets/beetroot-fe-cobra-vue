const BASE_COCTAILS_URL = "https://www.thecocktaildb.com/api/json/v1";
const api_key = '1';

const coctailsUrls = {
  random: `${BASE_COCTAILS_URL}/${api_key}/random.php`,
  search: `${BASE_COCTAILS_URL}/${api_key}/search.php?s=`,
  categories: `${BASE_COCTAILS_URL}/${api_key}/list.php?c=list`,
  glasses: `${BASE_COCTAILS_URL}/${api_key}/list.php?g=list`,
  ingredients: `${BASE_COCTAILS_URL}/${api_key}/list.php?i=list`,
  alcoholic: `${BASE_COCTAILS_URL}/${api_key}/list.php?a=list`,
  lookup: `${BASE_COCTAILS_URL}/${api_key}/lookup.php?i=`,
}


export { coctailsUrls };