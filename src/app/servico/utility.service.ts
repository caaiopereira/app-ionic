import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    //Ferramenta do carregando!
    private loading: LoadingController,

    //toastController - Criar uma mensagem
    private toast: ToastController
  ) { }

  //Metodo do loading
  async carregando(message: string, duration: number){
    const load = this.loading.create({
      mode: 'ios',
      message,
      duration,
    });

    (await load).present();

  }


  async toastando(message:string, position: "top" | "middle" | "bottom" , duration: number, color:string){
    const toastei = this.toast.create({
      message,
      position,
      duration,
      color
    });

    (await toastei).present();
    location.reload();
  }
}
