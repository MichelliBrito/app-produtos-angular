import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Produto } from './produto'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  endpointGet = 'http://produtos-apirest.herokuapp.com/api/produtos';
  endpointPost = 'http://produtos-apirest.herokuapp.com/api/produto';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.endpointGet);
  }



  addProduct (produto): Observable<any> {
    console.log(produto);
    return this.http.post<any>(this.endpointPost, produto, this.httpOptions);
  }
  
}
