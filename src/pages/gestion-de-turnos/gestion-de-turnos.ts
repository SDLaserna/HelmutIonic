import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, SegmentButton } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-gestion-de-turnos',
  templateUrl: 'gestion-de-turnos.html',
})
export class GestionDeTurnosPage implements AfterViewInit{

  // @ViewChild('slideTurno') slides : Slides;
  seccionPaciente : boolean = true;
  seccionMedico : boolean = false;
  opciones : string = "paciente"; //--> arranca apuntando a paciente
  @ViewChild('pacienteBtn') pacienteBtn : SegmentButton;
  @ViewChild('profesionalBtn') profesionalBtn : SegmentButton;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionDeTurnosPage');
    console.log(this.seccionPaciente);
    console.log(this.seccionMedico);
  }

   ngAfterViewInit(){
  
   }

   terminoPaciente(){
     this.pacienteBtn.disabled=true;
     this.profesionalBtn.disabled=false;
     this.opciones = "profesional";
   }

}
