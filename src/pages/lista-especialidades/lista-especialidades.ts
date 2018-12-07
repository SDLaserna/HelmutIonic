import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-especialidades',
  templateUrl: 'lista-especialidades.html',
})
export class ListaEspecialidadesPage {

  especialidades: any = [
    { nombre: 'Psicología' },
    { nombre: 'Oftalmología' },
    { nombre: 'Pediatría' },
    { nombre: 'Dermatología' },
    { nombre: 'Cardiología' },
    { nombre: 'Gastroenterología' },
    { nombre: 'Fonoaudiología' },
    { nombre: 'Infectología' },
    { nombre: 'Psiquiatría' },
    { nombre: 'Kinesiología' },
];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEspecialidadesPage');
  }

  visualizar(especialidad:any){
    this.navCtrl.push('ListaDeMedicosPage', {especialidad : especialidad});
  }

}
