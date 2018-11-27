import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupDatosDelPacientePage } from './popup-datos-del-paciente';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PopupDatosDelPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(PopupDatosDelPacientePage),
    CommonModule
  ],
})
export class PopupDatosDelPacientePageModule {}
