import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtos } from 'src/app/model/produto.model';
import { DatabaseService } from 'src/app/servico/database.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  image = "https://cdn.pixabay.com/photo/2015/02/23/20/53/tomatoes-646645_960_720.jpg";
  routeId = null;
  
  produto: any = {};

  readonly API = "http://localhost:3000/lista/";
  
  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }


  constructor(
    //Essa ferramenta serve para capturar a rota (caminho) que estiver ativo
    private activatedRoute: ActivatedRoute,
    private banco: DatabaseService,
    private  http: HttpClient
  ) { }

  ngOnInit() {
    this.routeId = this.activatedRoute.snapshot.params['id'];
    
    if(this.routeId){
      // Traz o item do banco de dados
      this.banco.getOneItem(this.routeId).subscribe(caixa => {this.produto = caixa});
    }

  }

  //Método que chama o serviço de atualização
  update(form: Produtos){
    return this.http.put(this.API + this.produto.produto , JSON.stringify(form), this.HttpOptions).subscribe();
  }

}
