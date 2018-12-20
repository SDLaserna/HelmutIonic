import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurnoDatosPacientePage } from './turno-datos-paciente';

@NgModule({
  declarations: [
    TurnoDatosPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(TurnoDatosPacientePage),
  ],
})
export class TurnoDatosPacientePageModule {}
