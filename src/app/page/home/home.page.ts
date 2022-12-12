
import { Component, OnInit } from '@angular/core';

import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { DatabaseService } from 'src/app/servico/database.service';

import { Produtos } from 'src/app/model/produto.model';
import { UtilityService } from 'src/app/servico/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  image = "https://cdn.pixabay.com/photo/2015/02/23/20/53/tomatoes-646645_960_720.jpg";

  listaProdutos: Produtos[] = [];
  constructor(
    private database: DatabaseService,

    //loadingController - Ferramenta do carregando
    // private loadCtrl: LoadingController,

    //alertController - Ferramente que cria um alert
    private alertCtrl: AlertController,

    //toastController - Criar uma mensagem
    // private toast: ToastController

    private utility: UtilityService
  ) {}

  ngOnInit(){
    //Carrega o metodo no inicio da pagina
    this.utility.carregando("Carregando",500);
    this.database.getProdutos().subscribe(results => this.listaProdutos = results);
      
  }

  deletar(id: number){
    try{
      this.database.delProdutos(id);   
    }finally{
      // Chama a mensagem
      this.utility.toastando("Item Excluído", "bottom", 1000, "danger");
    }
  }



  //Método do alertando 
  async alertando(){
    const alert = this.alertCtrl.create({
      mode:'ios',
      header: 'Cadastro de Produtos',
      inputs:[
        {
          name: 'produto',
          type: 'text',
          placeholder: 'Informe o Produto',
          
        },
        {
          name:'quantidade',
          type: 'text',
          placeholder: 'Informe a Quantidade'
        }
      ],
      buttons: [
        //Botao de cancelar
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('CPF CANCELADO');
          }
        },
        //Botao de cadastrar
        {
          text: 'Cadastrar',
          handler: (valor) => {
            // Objeto que irá formar nosso item da lista
            let item = {
              produto: valor.produto,
              quantidade: valor.quantidade
            }
            try{
              this.database.postProdutos(item);
            }finally{
              this.utility.toastando("Item Adicionado", 'top', 1000, "success");

            }
          }
        }
      ]
    });

    (await alert).present();
  }



}
