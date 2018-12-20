import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionPacientesPage } from './gestion-pacientes';

@NgModule({
  declarations: [
    GestionPacientesPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionPacientesPage)
  ],
})
export class GestionPacientesPageModule {}
