import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient :  HttpClient) { }

  userLogin(form){

    return this.httpClient.post('http://127.0.0.1:8000/api/login', form);

  }

  userRegisteration(form){
    return this.httpClient.post('http://127.0.0.1:8000/api/register', form);
  }
}
