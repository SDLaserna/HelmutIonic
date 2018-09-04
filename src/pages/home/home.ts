import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authFirebase: AngularFireAuth, private toast: ToastController) { }

  ionViewDidLoad() {
    this.authFirebase.authState.subscribe((datos) => {
      if (datos && datos.email && datos.uid) {
        this.toast.create({
          message: `Bienvenido al sistema de gestión hospitalaria HELMUT ${datos.email}`,
          duration: 3500
        }).present();
      }
      else{
        this.toast.create({
          message: 'Al parecer no tiene la sesión iniciada, vuelva a loguarse',
          duration:3500
        }).present();
      }
    });
  }

}
