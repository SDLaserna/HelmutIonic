import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(public navCtrl: NavController, private authFirebase: AngularFireAuth, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User) {
    try {
      const result = await this.authFirebase.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    } catch (error) {
      console.error(error);
    }

  }

}
