import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscriber } from 'rxjs';
import { productModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://127.0.0.1:8000/api";
  allProducts = new BehaviorSubject <productModel []> (null);
  constructor(private httpClient : HttpClient) { }

  getProducts(){
    return this.httpClient.get('http://127.0.0.1:8000/api/products');
  }

  addProducts(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/products',data);
  }

  deleteProduct(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/products/'+id);
  }

  getSingleProductData(id){
    this.httpClient.get(this.baseUrl+'products',id);
  }

  updateProduct(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/update_product',data);
  }

  getFromDB(keys){

    return this.httpClient.post('http://127.0.0.1:8000/api/search-products?keys='+keys, null);
  }

}
