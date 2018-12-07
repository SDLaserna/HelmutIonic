import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ModificarDatosPacienteComponent } from './modificar-datos-paciente/modificar-datos-paciente';
import { HistoriaClinicaPacienteComponent } from './historia-clinica-paciente/historia-clinica-paciente';
import { PacienteListaComponent } from './paciente-lista/paciente-lista';

@NgModule({
    declarations: [
        PacienteListaComponent,
        HistoriaClinicaPacienteComponent,
        ModificarDatosPacienteComponent,
        ModificarDatosPacienteComponent],
    imports: [IonicModule.forRoot({
        HistoriaClinicaPacienteComponent,
        PacienteListaComponent,
        ModificarDatosPacienteComponent
    })],
    exports: [
        PacienteListaComponent,
        HistoriaClinicaPacienteComponent,
        ModificarDatosPacienteComponent,
    ]
})
export class ComponentsModule { }
