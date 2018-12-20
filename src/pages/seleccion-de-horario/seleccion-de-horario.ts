import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-seleccion-de-horario',
  templateUrl: 'seleccion-de-horario.html',
})

export class SeleccionDeHorarioPage {

  paramFecha: {
    date: number,
    hasEvent: boolean,
    isSelect: boolean,
    isThisMonth: boolean,
    isToday: boolean,
    month: number
    year: number
  };

  horario: string = "07:00"
  profesionalParam: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.paramFecha = navParams.get('objetoFecha');
    this.profesionalParam = navParams.get('profesional');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionDeTurnoPage');
    console.log("El parámetro recibido es: " + this.paramFecha);
  }

  irAPaginaDeConfirmacion() {
    this.navCtrl.push('ConfirmarProfesionalPage',
      {
        profesional: this.profesionalParam,
        fecha: this.paramFecha,
        horario: this.horario
      });
  }
}
