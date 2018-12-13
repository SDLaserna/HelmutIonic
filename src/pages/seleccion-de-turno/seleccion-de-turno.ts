import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-seleccion-de-turno',
  templateUrl: 'seleccion-de-turno.html',
})
export class SeleccionDeTurnoPage {

  // Podría usar el campo "duracion" para crear el arreglo de cantidad de líneas en base a eso dependiendo 
  //cada profesional

  // public cantidadDeLineas: Array<any> = new Array(48);
  
  paramFecha: string;
  horario: string = "07:00"

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.paramFecha = navParams.get("objetofecha");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionDeTurnoPage');
    console.log("El parámetro recibido es: " + this.paramFecha);
  }

  // seleccionDeTurno(item, elemento:MouseEvent){
  //   console.log("El elemento es:");
  //   console.log(elemento["srcElement"]["offsetParent"]);
  //   console.log("El item seleccionado es:"+ item);
  //   if (elemento.target["style"]["color"] != 'white') {
  //     elemento["srcElement"]["offsetParent"]["style"]["background-color"] = '#008784';
  //     // elemento.target["style"]["background-color"] = '#008784';
  //     elemento.target["style"]["color"] = 'white';
  //   }
  //   else{
  //     elemento["srcElement"]["offsetParent"]["style"]["background-color"] = 'white';
  //     elemento.target["style"]["color"] = 'black';
  //   }
  // }

  abreConfirmacionDeTurno(elemento) {
    console.log("Abrir el diálogo de confirmación al igual que el votar de elektu");

    const confirm = this.alertCtrl.create({
      title: '¿Desea confirmar el siguiente turno?',
       message: 'Dr. Juan Pablo Peralta, Oftalmología dia jueves 10 de enero a las'+ this.horario,
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Se confirmó el turno');
            const infoReserva = this.alertCtrl.create({
              title: 'Turno confirmado',
              message: 'Turno Nro. 1 del día Jueves 10/01/2019 a las '+this.horario+'hs para APELIDO9511, NOMBRE9511(42298745) Reservado por: APELIDO9511-9511, NOMBRE9511 (mlopez) el 12/12/2018               Profesional: APELIDO1459, NOMBRE1459 (vbaroli) Especialidad: Oftalmología Consultorio: Facultad de Agronomía (Calle 60 Y 118)',
              buttons: [
                { text: 'Ok' }
              ]
            });
            infoReserva.present();
          }
        },
        {
          text: 'No, gracias',
          handler: () => {
            console.log('Se rechazó la confirmación del turno');
          }
        }
      ]
    });
    confirm.present();
  }

}
