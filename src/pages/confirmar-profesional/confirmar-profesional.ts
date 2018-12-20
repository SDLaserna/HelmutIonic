import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-confirmar-profesional',
  templateUrl: 'confirmar-profesional.html',
})
export class ConfirmarProfesionalPage {

  profesionalParam : any;
  fechaParam : any;
  horarioParam:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private alertCtrl : AlertController) {
   
      this.profesionalParam = this.navParams.get('profesional');
      this.fechaParam = this.navParams.get('fecha');
      this.horarioParam = this.navParams.get('horario');
   
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmarProfesionalPage');
  }

  abreConfirmacionDeTurno() {
    console.log("Abrir el diálogo de confirmación al igual que el votar de elektu");

    const confirm = this.alertCtrl.create({
      title: '¿Desea confirmar el siguiente turno?',
      message: this.profesionalParam.nombre+', '+ this.profesionalParam.especialidad +' dia '+this.fechaParam.date+'/'+this.fechaParam.month+'/'+this.fechaParam.year+' a las ' + this.horarioParam,
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Se confirmó el turno');
            const infoReserva = this.alertCtrl.create({
              title: 'Turno confirmado',
              message: 'Turno Nro. 1 del día '+this.fechaParam.date+'/'+this.fechaParam.month+'/'+this.fechaParam.year+' a las ' + this.horarioParam + 'hs para APELIDO9511, NOMBRE9511(42298745) Reservado por: APELIDO9511-9511, NOMBRE9511 (mlopez) el 12/12/2018 Profesional: APELIDO1459, NOMBRE1459 (vbaroli)Especialidad:'+this.profesionalParam.especialidad+' Consultorio: Facultad de Agronomía (Calle 60 Y 118)',
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
