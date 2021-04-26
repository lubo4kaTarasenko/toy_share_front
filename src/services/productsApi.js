import { fullPath } from "./baseUrl";
import $ from 'jquery'

export default class ProductsApi{

  createProduct(data){
    return $.ajax({
      method: "POST",
      url: fullPath(`/product`),
      data: data,
      dataType: 'json',
      cache: false,
      processData: false,
      contentType: false
    })
  }

  getListByParams(p) {
    return this.getList(p.search, p.page, p.category, p.subcategory)
  }

  getList(q, p, c, sc){
    return fetch(fullPath(`/products?q=${q}&p=${p}&c=${c}&sc=${sc}`))
    .then(res => res.json())
  }

  getProduct(name){
    return fetch(fullPath(`/product?name=${name}`)).then(res => res.json())
  }

  deleteProduct(id){
    return fetch(fullPath(`/product?id=${id}`), {'method': 'DELETE'}).then(res => res.json())
  }

  wannaThing(id){
    return fetch(fullPath(`/product/wanna_thing?id=${id}`), {'method': 'GET'}).then(res => res.json())
  }

  thingToChange(id, change_id){
    return fetch(fullPath(`/product/thing_to_change?id=${id}&change_id=${change_id}`), {'method': 'GET'}).then(res => res.json())
  }
  // changeThing(id){
  //   return fetch(fullPath(`/product/get_it?id=${id}`), {'method': 'GET'}).then(res => res.json())
  // }
}
