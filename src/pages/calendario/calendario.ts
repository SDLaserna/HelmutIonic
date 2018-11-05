import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  profesionalVisualizado : string;

  constructor(public navCtrl: NavController, public navParam : NavParams) {
   this.profesionalVisualizado = navParam.get("nomOmatriculaAbuscar");
  }

  ionViewWillEnter() {
    console.log("El parametro recibido fue:" + this.profesionalVisualizado);
  }

  onDaySelect(evento){
    // hay que considerar que este método retorna el mes enero como mes 0
    console.log(evento);
    this.navCtrl.push(SeleccionDeTurnoPage,{objetoFecha: evento});
  }
  
}
