import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-de-medicos',
  templateUrl: 'lista-de-medicos.html',
})
export class ListaDeMedicosPage {

  especializacionABuscar: string;

  lista: any ;

  medicos: any = [
    { nombre: 'Dra. Analía Vallejos', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Graciela Dux Santoy', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Juan Pedro Gomez', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dra. Maria Laura Gutierrez', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Oscar Martinez', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Carlos Espindola', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Juan Pablo Peralta', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Juan Pablo Peralta', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Juan Pablo Peralta', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Juan Pablo Peralta', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Juan Pablo Peralta', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Juan Pablo Peralta', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Juan Pablo Peralta', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Juan Pablo Peralta', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Juan Pablo Peralta', matricula: '456789525', especialidad:'Psicología' },
    { nombre: 'Dr. Juan Pablo Peralta', matricula: '456789525', especialidad:'Psicología' }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.especializacionABuscar = navParams.get("especializacionABuscar");
    this.lista = this.medicos;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaDeMedicosPage');
    console.log("El parametro recibido fue:" + this.especializacionABuscar);
  }

  visualizarConfirmacion(profesional: any) {
    // this.navCtrl.push('ConfirmarProfesionalPage', { profesional: profesional });
    this.navCtrl.push('CalendarioPage', { profesional: profesional });
  }

  getItems(ev: any) {
    // se resetea la lista
    this.medicos = this.lista;
    // se setea en una variable el valor que está en el searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.medicos = this.medicos.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
