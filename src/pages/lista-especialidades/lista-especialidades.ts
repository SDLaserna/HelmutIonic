import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-especialidades',
  templateUrl: 'lista-especialidades.html',
})
export class ListaEspecialidadesPage {

  lista : any;

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
  this.lista = this.especialidades;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEspecialidadesPage');
  }

  getItems(ev: any) {
    // se resetea la lista
    this.especialidades = this.lista;
    // se setea en una variable el valor que está en el searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.especialidades = this.especialidades.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  visualizar(especialidad:any){
    this.navCtrl.push('ListaDeMedicosPage', {especialidad : especialidad});
  }

}
