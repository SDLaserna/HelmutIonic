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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultoriosPage');
    // this.obtenerConsultorios();
    this.obtenerSensores();
  }

  obtenerConsultorios() {
    this.consultoriosService.obtenerConsultorios().subscribe(
      (resultado) => this.listaDeConsultorios = resultado);
  }

  obtenerSensores(){
    /* Este metodo es a modo de prueba para aprovechar y usar en el proyecto del LINTI */
    this.consultoriosService.obtenerSensores().subscribe(resultado => this.listaDeSensores = resultado);
  }
}
