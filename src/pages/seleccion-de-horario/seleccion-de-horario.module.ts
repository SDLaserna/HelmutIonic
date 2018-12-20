import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeleccionDeHorarioPage } from './seleccion-de-horario';

@NgModule({
  declarations: [
    SeleccionDeHorarioPage,
  ],
  imports: [
    IonicPageModule.forChild(SeleccionDeHorarioPage),
  ],
})
export class SeleccionDeHorarioPageModule {}
