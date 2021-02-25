import { fullPath } from "./baseUrl";

export default class ProductsApi{
  createProduct(product){
    return fetch(fullPath(`/product`),{
      "method": "POST",
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      "body": JSON.stringify(product)
     })
     .then(response => response.json())
     .catch(err => {
       console.log(err);
     });
  }

  getListByParams(p) {
    return this.getList(p.search, p.page, p.category, p.subcategory)
  }

  getList(q, p, c, sc){
    return fetch(fullPath(`/products?q=${q}&p=${p}&c=${c}&sc=${sc}`))
    .then(res => res.json())
  }

  getProduct(name){
    return fetch(fullPath(`/product?name=${name}`))
    .then(res => res.json())
  }
}
