import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Slides } from 'ionic-angular';
import { SIGCONT } from 'constants';


/**
 * Generated class for the ModificarDatosPacienteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modificar-datos-paciente',
  templateUrl: 'modificar-datos-paciente.html'
})
export class ModificarDatosPacienteComponent implements AfterViewInit{

  
  @ViewChild('slidesID') slides : Slides;

  // @ViewChild('slidesAntNoPatologicos') slidesNoPatologico : Slides;
  calidad: string;
  cantidadAlimentacion: string;
  cantidadAlcohol:string;
  frecuenciaAlcohol:string;
  antecedenteAlcohol: string;
  cantidadTabaco:string;
  frecuenciaTabaco:string;
  frecuenciaDeportes:string;
  
  constructor() {
    console.log('Hello ModificarDatosPacienteComponent Component');
  }

  ngAfterViewInit(){
  //   Para poder referenciar el viewChild apenas empieza,
  //  tengo que implementar este método de esta interface, sino en el constructor es undefined
    this.slides.lockSwipes(true);
    // this.slidesNoPatologico.paginationType = 'progress';
  }

  irADatosPersonales(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  irAAntPatologicos(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  irAAntNOPatologicos(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(2);
    this.slides.lockSwipes(true);
  }

  irAAntFamiliares(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(3);
    this.slides.lockSwipes(true);
  }
}
