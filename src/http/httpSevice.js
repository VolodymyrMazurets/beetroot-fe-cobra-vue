import { coctailsUrls, filmsUrls } from "../http";

class HttpSevice {
  _fetchData = async (url, config = {}) => {
    try {
      const res = await fetch(url, config);
      const parsedRes = await res.json();
      return parsedRes;
    } catch (error) {
      console.log(error);
      return error
    }
  };
  getRandomCoctail = () => this._fetchData(coctailsUrls.random);
  getCategories = async () => {
    const { drinks: alcoholic } = await this._fetchData(coctailsUrls.alcoholic);
    const { drinks: ingredients } = await this._fetchData(
      coctailsUrls.ingredients
    );
    const { drinks: glasses } = await this._fetchData(coctailsUrls.glasses);
    const { drinks: categories } = await this._fetchData(
      coctailsUrls.categories
    );
    return {
      alcoholic,
      ingredients,
      glasses,
      categories,
    };
  };
  getSearchCoctailsByName = (query) =>
    this._fetchData(`${coctailsUrls.search}${query}`);
  getCoctilById = (id) => this._fetchData(`${coctailsUrls.lookup}${id}`);
  getFilmsByQuery = (query, page) => this._fetchData(filmsUrls.search(query, page));
}

export const httpSevice = new HttpSevice();
