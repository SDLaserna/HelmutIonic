import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the GestionDeTurnosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-de-turnos',
  templateUrl: 'gestion-de-turnos.html',
})
export class GestionDeTurnosPage implements AfterViewInit{

  @ViewChild('slideTurno') slides : Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionDeTurnosPage');
  }

  ngAfterViewInit(){
    this.slides.lockSwipes(true);
  }

  siguiente(indice){
    this.slides.lockSwipes(false);
    this.slides.slideTo(indice+1);
    this.slides.lockSwipes(true);
  }

  anterior(indice){
    this.slides.lockSwipes(false);
    this.slides.slideTo(indice-1);
    this.slides.lockSwipes(true);
  }

}
