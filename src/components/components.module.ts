import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ModificarDatosPacienteComponent } from './modificar-datos-paciente/modificar-datos-paciente';

@NgModule({
    declarations: [
        ModificarDatosPacienteComponent,
        ModificarDatosPacienteComponent],
    imports: [IonicModule.forRoot({
        ModificarDatosPacienteComponent
    })],
    exports: [
        ModificarDatosPacienteComponent,
    ]
})

export class ComponentsModule { }
