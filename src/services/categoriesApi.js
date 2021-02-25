import { fullPath } from "./baseUrl";

export default class CategoriesApi{
  getList(){
    return fetch(fullPath(`/categories`))
    .then(res => res.json())
  }
}