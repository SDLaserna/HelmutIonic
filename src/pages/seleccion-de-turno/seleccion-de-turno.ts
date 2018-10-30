import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeleccionDeTurnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seleccion-de-turno',
  templateUrl: 'seleccion-de-turno.html',
})
export class SeleccionDeTurnoPage {

  // Podría usar el campo "duracion" para crear el arreglo de cantidad de líneas en base a eso dependiendo 
  //cada profesional

  public cantidadDeLineas : Array<any> = new Array(48);
  paramFecha:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.paramFecha = navParams.get("objetofecha");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionDeTurnoPage');
    console.log("El parámetro recibido es: "+this.paramFecha);
    this.cantidadDeLineas.fill(1);
  }

  seleccionDeTurno(item, elemento:MouseEvent){
    console.log("El elemento es:");
    console.log(elemento);
    console.log("El item seleccionado es:"+ item);
    elemento.target["style"]["background-color"] = '#008784';
    elemento.target["style"]["color"] = 'white';
  }

}
