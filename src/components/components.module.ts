import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CardBuscadorComponent } from './card-buscador/card-buscador';
import { HistoriaClinicaPacienteComponent } from './historia-clinica-paciente/historia-clinica-paciente';
import { PacienteListaComponent } from './paciente-lista/paciente-lista';
@NgModule({
	declarations: [CardBuscadorComponent,
    PacienteListaComponent,HistoriaClinicaPacienteComponent],
	imports: [IonicModule.forRoot({HistoriaClinicaPacienteComponent,CardBuscadorComponent,
		PacienteListaComponent})],
	exports: [CardBuscadorComponent,
    PacienteListaComponent,HistoriaClinicaPacienteComponent]
})
export class ComponentsModule {}
