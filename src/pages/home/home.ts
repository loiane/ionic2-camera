import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Camera } from 'ionic-native';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public alertCtrl: AlertController,
    private domSanitizer: DomSanitizer) {}

  private imagem: string;

  onTirarFoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      quality: 90,
    }).then((imageData) => {
      this.imagem = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      this.mostrarAlertaErro(err);
    });
  }

  mostrarAlertaErro(err){
    console.log(err);
    let alert = this.alertCtrl.create({
       title: 'Erro',
       subTitle: 'Erro ao capturar foto',
       buttons: ['OK']
     });
     alert.present();
  }

}
