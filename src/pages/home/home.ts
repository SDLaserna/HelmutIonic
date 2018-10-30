import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  firebaseUser : firebase.User;

  constructor(public navCtrl: NavController, private authFirebase: AngularFireAuth,
     private toast: ToastController, private authService : AuthServiceProvider) { }

  ionViewDidLoad() {
    this.authFirebase.authState.subscribe((firebaseUserRes) => {
      this.firebaseUser = firebaseUserRes;
      if (firebaseUserRes && firebaseUserRes.email && firebaseUserRes.uid) {
        this.toast.create({
          message: `Bienvenido al sistema de gestión hospitalaria HELMUT ${firebaseUserRes.email}`,
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

  logout(){
    console.log("Ingreso el logOut");
    this.authFirebase.auth.signOut().then(function(){
      //sing Out succesful
      console.log("Se cerro session correctamente. Usuario actual en => ",  this.authFirebase.auth.currentUser);
    }).catch(function(error){
      // An error happend
    });
    this.navCtrl.setRoot(LoginPage);
  }

}
