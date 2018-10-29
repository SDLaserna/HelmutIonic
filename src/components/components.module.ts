import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CardBuscadorComponent } from './card-buscador/card-buscador';
import { ModificarDatosPacienteComponent } from './modificar-datos-paciente/modificar-datos-paciente';
import { CardPacienteComponent } from './card-paciente/card-paciente';
import { CardMedicoComponent } from './card-medico/card-medico';
import { HistoriaClinicaPacienteComponent } from './historia-clinica-paciente/historia-clinica-paciente';
import { PacienteListaComponent } from './paciente-lista/paciente-lista';
import { MedicoListaComponent } from './medico-lista/medico-lista';


@NgModule({
    declarations: [CardBuscadorComponent,
        PacienteListaComponent,
        HistoriaClinicaPacienteComponent,
        ModificarDatosPacienteComponent,
        CardPacienteComponent,
        CardMedicoComponent,
        MedicoListaComponent],
    imports: [IonicModule.forRoot({
        HistoriaClinicaPacienteComponent,
        CardBuscadorComponent,
        PacienteListaComponent,
        ModificarDatosPacienteComponent,
        CardPacienteComponent,
        CardMedicoComponent,
        MedicoListaComponent
    })],
    exports: [CardBuscadorComponent,
        PacienteListaComponent,
        HistoriaClinicaPacienteComponent,
        ModificarDatosPacienteComponent,
        CardPacienteComponent,
        CardMedicoComponent,
        MedicoListaComponent]
})
export class ComponentsModule { }
