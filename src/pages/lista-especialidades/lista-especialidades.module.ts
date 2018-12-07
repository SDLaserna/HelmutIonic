import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEspecialidadesPage } from './lista-especialidades';

@NgModule({
  declarations: [
    ListaEspecialidadesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEspecialidadesPage),
    ComponentsModule
  ],
})
export class ListaEspecialidadesPageModule {}
