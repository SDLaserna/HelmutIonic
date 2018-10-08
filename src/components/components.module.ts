import { NgModule } from '@angular/core';
import { CardBuscadorComponent } from './card-buscador/card-buscador';
import { IonicModule } from 'ionic-angular';
import { HistoriaClinicaPacienteComponent } from './historia-clinica-paciente/historia-clinica-paciente';
@NgModule({
	declarations: [CardBuscadorComponent,
    HistoriaClinicaPacienteComponent],
	imports: [IonicModule.forRoot(CardBuscadorComponent, HistoriaClinicaPacienteComponent)],
	exports: [CardBuscadorComponent,
    HistoriaClinicaPacienteComponent]
})
export class ComponentsModule {}
