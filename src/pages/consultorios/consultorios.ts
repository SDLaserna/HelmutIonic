import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultoriosServiceProvider } from '../../providers/consultorios-service/consultorios-service';

@IonicPage()
@Component({
  selector: 'page-consultorios',
  templateUrl: 'consultorios.html',
})
export class ConsultoriosPage {

  listaDeConsultorios: Consultorio[] = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public consultoriosService: ConsultoriosServiceProvider) {
    
    this.obtenerConsultorios();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultoriosPage');
  }

  obtenerConsultorios() {
    // this.consultoriosService.obtenerConsultorios().subscribe(
      // (resultado : Consultorio[]) => {this.listaDeConsultorios = resultado;
      // console.log(resultado)});
  }
}
