import { AlertController, Events, IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Slides) slides: Slides;
  loading: Loading;
  // registerCredentials = { email: '', password: '' };
  user = {} as User;

  constructor(public events: Events ,public navCtrl: NavController, private authFirebase : AngularFireAuth, public navParams: NavParams, private alertCtrl: AlertController, private loadingCtrl: LoadingController)
   {  }

  async login(user : User ){  /* Es async porque es un promise */
      const result = this.authFirebase.auth.signInWithEmailAndPassword(user.email, user.password).catch(function(error){
        console.log("Error en contraseña",error.message);
        // De aca debe salir un cartel informativo en el logeo
      });
      var userC = this.authFirebase.auth.currentUser;
      console.log("usuario obtenido", userC);
      if (userC){
        var rol = userC.displayName;
        console.log("El rol del usuario logeado es: ==> "+rol);
        console.log('user:'+rol);
        this.events.publish('user:'+rol);
        console.log("inicio ssesion enviar a Home Page");
        this.showLoading();

        this.navCtrl.setRoot('HomePage');
      }else{
        console.log("No se puede inicio sesion");

      }
      // this.authFirebase.auth.onAuthStateChanged(function(user) {
      //   if (user) {
      //     console.log(user);
      //     console.log('El usuario está logueado');
      //     // this.showLoading(); 
      //     this.navCtrl.setRoot(HomePage);
      //   } else {
      //     console.log('El usuario está deslogueado');
      //   }
      // });
      /* console.log(result); */
      /* if(result){
        this.showLoading();
        this.navCtrl.setRoot(HomePage);
      } */
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
  ngAfterViewInit() {
    this.slides.startAutoplay();
    this.slides.freeMode = true;
    this.slides.effect= "fade";
    this.slides.pager =true;
    this.slides.loop = true;
    this.slides.autoplayDisableOnInteraction=false;
    this.slides.autoplay = 6000;
  }
}