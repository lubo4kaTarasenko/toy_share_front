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
}
