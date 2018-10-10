import { Component } from '@angular/core';

@Component({
  selector: 'card-medico',
  templateUrl: 'card-medico.html'
})
export class CardMedicoComponent {

  busqPorEspecialidad : boolean;
  busqPorProfesional: boolean;
  especialidad: string;
  nomOmatricula: string;

  constructor() {
    console.log('Hello CardMedicoComponent Component');
    this.busqPorEspecialidad = true;
  }

  seBuscaPorEspecialidad(){
    this.busqPorProfesional = false;
    this.busqPorEspecialidad = true;
  }

  seBuscaPorProfesional(){
      this.busqPorProfesional = true;
      this.busqPorEspecialidad = false;
  }

  visualizarListaDeMedicos(){
    if (this.busqPorEspecialidad == true
      && this.busqPorProfesional == false
      && this.especialidad != null) {
      // no se como hacerle un push con el parámetro a una componente que no tiene Navctrl
      // voy a probar hacer una componente con la lista y mandarle un input desde la vista.
      // Ver como hizo la lista Gutavo para poder ver si le hago un input.
    }
  }
}
