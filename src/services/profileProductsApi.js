import { fullPath } from "./baseUrl";

export default class ProfileProductsApi{

  getListByParams(kind, status) {
    return this.getList(kind, status)
  }

  getList(kind, status){
    return fetch(fullPath(`/profile/products?kind=${kind}&status=${status}`))
    .then(res => res.json())
  }

  // getProduct(name){
  //   return fetch(fullPath(`/product?name=${name}`))
  //   .then(res => res.json())
  // }
}