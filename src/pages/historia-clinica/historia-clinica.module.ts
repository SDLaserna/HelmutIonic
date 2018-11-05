import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoriaClinicaPage } from './historia-clinica';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HistoriaClinicaPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoriaClinicaPage),
    ComponentsModule
  ],
})
export class HistoriaClinicaPageModule {}
