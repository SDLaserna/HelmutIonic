import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionDeTurnosPage } from './gestion-de-turnos';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    GestionDeTurnosPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionDeTurnosPage),
    ComponentsModule
    
  ],
})
export class GestionDeTurnosPageModule {}
