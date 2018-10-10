import { NgModule } from '@angular/core';
import { CardBuscadorComponent } from './card-buscador/card-buscador';
import { IonicModule } from 'ionic-angular';
import { HistoriaClinicaPacienteComponent } from './historia-clinica-paciente/historia-clinica-paciente';
import { ModificarDatosPacienteComponent } from './modificar-datos-paciente/modificar-datos-paciente';
import { CardPacienteComponent } from './card-paciente/card-paciente';
import { CardMedicoComponent } from './card-medico/card-medico';
@NgModule({
    declarations: [CardBuscadorComponent,
        HistoriaClinicaPacienteComponent,
        ModificarDatosPacienteComponent,
    CardPacienteComponent,
    CardMedicoComponent],
    imports: [
        IonicModule.forRoot(CardBuscadorComponent),
        IonicModule.forRoot(HistoriaClinicaPacienteComponent),
        IonicModule.forRoot(ModificarDatosPacienteComponent),
        IonicModule.forRoot(CardPacienteComponent),
        IonicModule.forRoot(CardMedicoComponent)],
    exports: [CardBuscadorComponent,
        HistoriaClinicaPacienteComponent,
        ModificarDatosPacienteComponent,
    CardPacienteComponent,
    CardMedicoComponent]
})
export class ComponentsModule { }
