import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacienteVO } from '../../models/PacienteVO';

/**
 * Generated class for the HistoriaClinicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historia-clinica',
  templateUrl: 'historia-clinica.html',
})
export class HistoriaClinicaPage {

  public pacientes: Array<PacienteVO> = new Array<PacienteVO>();

  pacienteParam : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pacienteParam=navParams.get('paciente');
    console.log(this.pacienteParam);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoriaClinicaPage');
  }


  getPacientes(){
  // llamar al servicio correspondiente para obtener los pacientes
  }
  
  getItems(ev: any) {
  
    // se resetea la lista
    this.getPacientes();
    // se setea en una variable el valor que está en el searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.pacientes = this.pacientes.filter((item) => {
        return (
          item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1
          ||
          item.apellido.toLowerCase().indexOf(val.toLowerCase()) > -1
          ||
          item.dni.toLowerCase().indexOf(val.toLowerCase()) > -1
          );
      })
    }
  }

}
