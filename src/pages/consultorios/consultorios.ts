import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultoriosServiceProvider } from '../../providers/consultorios-service/consultorios-service';

/**
 * Generated class for the ConsultoriosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultorios',
  templateUrl: 'consultorios.html',
})
export class ConsultoriosPage {

  listaDeConsultorios: Consultorio[] = [];
  listaDeSensores : Sensor[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public consultoriosService: ConsultoriosServiceProvider) {
    // this.obtenerSensores();
    this.obtenerConsultorios();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultoriosPage');
  }

  obtenerConsultorios() {
    this.consultoriosService.obtenerConsultorios().subscribe(
      (resultado : Consultorio[]) => {this.listaDeConsultorios = resultado;
      console.log(resultado)});
  }

  obtenerSensores(){
    /* Este metodo es a modo de prueba para aprovechar y usar en el proyecto del LINTI */
    this.consultoriosService.obtenerSensores().subscribe(
      (resultado : Sensor[]) =>this.listaDeSensores = resultado);
  }
}
