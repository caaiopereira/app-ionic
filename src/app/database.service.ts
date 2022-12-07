import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from './model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly API = 'http://localhost:3000/lista/';

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }; 

  constructor(private http: HttpClient) { }

  getProdutos(){
    return this.http.get<Produtos[]>(this.API);
  }

  postProdutos(produto: any){
    return this.http.post(this.API, JSON.stringify(produto), this.HttpOptions).subscribe();
  }

  delProdutos(id: number){
    return this.http.delete(this.API + id).subscribe();
  }

}
