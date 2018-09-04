import { AlertController, IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { RegisterPage } from '../register/register';
import { auth } from 'firebase';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  // registerCredentials = { email: '', password: '' };
  user = {} as User;
  
  constructor(public navCtrl: NavController, /*private auth: AuthServiceProvider*/ private authFirebase : AngularFireAuth, public navParams: NavParams, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {  }

  async login(user : User ){  /* Es async porque es un promise */
    try {
      const result = this.authFirebase.auth.signInWithEmailAndPassword(user.email, user.password);  
      console.log(result);
      if(result){
        this.showLoading();
        this.navCtrl.setRoot(HomePage);
      }
    } catch (error) {
      console.error(error);
      this.showError(error);
    }    
  }
  
  irARegistro(){
    this.navCtrl.push('RegisterPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  // public login() {
  //   this.showLoading()
  //   this.auth.login(this.registerCredentials).subscribe(allowed => {
  //     if (allowed) {        
  //       this.navCtrl.setRoot("ConsultoriosPage");
  //     } else {
  //       this.showError("Access Denied");
  //     }
  //   },
  //     error => {
  //       this.showError(error);
  //     });
  // }

}