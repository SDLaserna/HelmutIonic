import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDeMedicosPage } from './lista-de-medicos';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ListaDeMedicosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDeMedicosPage),
    ComponentsModule
  ],
})
export class ListaDeMedicosPageModule {}
