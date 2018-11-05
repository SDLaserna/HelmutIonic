import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscarHistoriaClinicaPage } from './buscar-historia-clinica';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BuscarHistoriaClinicaPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscarHistoriaClinicaPage),
    ComponentsModule
  ],
})
export class BuscarHistoriaClinicaPageModule {}
