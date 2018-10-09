import { NgModule } from '@angular/core';
import { CardBuscadorComponent } from './card-buscador/card-buscador';
import { IonicModule } from 'ionic-angular';
import { HistoriaClinicaPacienteComponent } from './historia-clinica-paciente/historia-clinica-paciente';
import { ModificarDatosPacienteComponent } from './modificar-datos-paciente/modificar-datos-paciente';
@NgModule({
    declarations: [CardBuscadorComponent,
        HistoriaClinicaPacienteComponent,
        ModificarDatosPacienteComponent],
    imports: [
        IonicModule.forRoot(CardBuscadorComponent),
        IonicModule.forRoot(HistoriaClinicaPacienteComponent),
        IonicModule.forRoot(ModificarDatosPacienteComponent)],
    exports: [CardBuscadorComponent,
        HistoriaClinicaPacienteComponent,
        ModificarDatosPacienteComponent]
})
export class ComponentsModule { }
