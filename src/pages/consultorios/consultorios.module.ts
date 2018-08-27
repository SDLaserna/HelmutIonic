import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultoriosPage } from './consultorios';

@NgModule({
  declarations: [
    ConsultoriosPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultoriosPage),
  ],
})
export class ConsultoriosPageModule {}
