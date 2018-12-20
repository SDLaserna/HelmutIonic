import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {  

  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: any;
  selectedEvent: any;
  isSelected: any;

  profesionalParam : any;

  constructor(public navCtrl: NavController, public navParam : NavParams) {
   this.profesionalParam = navParam.get('profesional');
  }

  ionViewWillEnter() {
    console.log("El parametro recibido fue:" + this.profesionalParam);
  }

  onDaySelect(evento){
    // hay que considerar que este método retorna el mes enero como mes 0
    console.log(evento);
    this.navCtrl.push('SeleccionDeHorarioPage',{objetoFecha: evento, profesional:this.profesionalParam});
  }
  
}
