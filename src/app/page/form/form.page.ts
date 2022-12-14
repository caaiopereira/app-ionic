
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DatabaseService } from 'src/app/servico/database.service';
import { UtilityService } from 'src/app/servico/utility.service';

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
  
  constructor(
    //Essa ferramenta serve para capturar a rota (caminho) que estiver ativo
    private activatedRoute: ActivatedRoute,
    private banco: DatabaseService,
    private router: Router,
    private util: UtilityService
  ) { }

  ngOnInit() {
    this.routeId = this.activatedRoute.snapshot.params['id'];
    
    if(this.routeId){
      // Traz o item do banco de dados
      this.banco.getOneItem(this.routeId).subscribe(caixa => {this.produto = caixa});
    }

  }
  
  //Método que chama o serviço de atualização
  update(form: any){
    this.banco.updateItem(form.value, this.routeId);
    this.router.navigate(['']);
    this.util.toastando("Item Atualizado com sucesso", "middle", 1000, "medium");
  }

}
