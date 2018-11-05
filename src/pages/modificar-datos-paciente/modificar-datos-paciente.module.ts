import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModificarDatosPacientePage } from './modificar-datos-paciente';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ModificarDatosPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(ModificarDatosPacientePage),
    ComponentsModule
  ],
})
export class ModificarDatosPacientePageModule {}
