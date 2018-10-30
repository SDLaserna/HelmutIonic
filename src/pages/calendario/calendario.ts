import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SeleccionDeTurnoPage } from '../seleccion-de-turno/seleccion-de-turno';


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

  constructor(public navCtrl: NavController) {}

  ionViewWillEnter() {
  }

  onDaySelect(evento){
    // hay que considerar que este método retorna el mes enero como mes 0
    console.log(evento);
    this.navCtrl.push(SeleccionDeTurnoPage,{objetoFecha: evento});
  }
  
}
