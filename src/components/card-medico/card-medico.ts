import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeMedicosPage } from '../../pages/lista-de-medicos/lista-de-medicos';
import { CalendarioPage } from '../../pages/calendario/calendario';


@Component({
  selector: 'card-medico',
  templateUrl: 'card-medico.html'
})
export class CardMedicoComponent {

  busqPorEspecialidad: boolean;
  busqPorProfesional: boolean;
  especialidad: string;
  nomOmatricula: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello CardMedicoComponent Component');
    this.busqPorEspecialidad = true;
  }

  seBuscaPorEspecialidad() {
    this.busqPorProfesional = false;
    this.busqPorEspecialidad = true;
  }

  seBuscaPorProfesional() {
    this.busqPorProfesional = true;
    this.busqPorEspecialidad = false;
  }

  visualizarListaDeMedicos() {
    // console.log(this.especialidad);
    // if (this.busqPorEspecialidad == true
      // && this.busqPorProfesional == false
      // && this.especialidad != null) {
      this.navCtrl.push(ListaDeMedicosPage, { especializacionABuscar: this.especialidad });
    // }
  }

  visualizarDisponibilidad(){
    // console.log(this.nomOmatricula);
    // if (this.busqPorProfesional == true 
      // && this.busqPorEspecialidad == false 
      // && this.nomOmatricula != null) {
      this.navCtrl.push(CalendarioPage, {nomOmatriculaABuscar : this.nomOmatricula});
    // }
  }
}
