import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CardBuscadorComponent } from './card-buscador/card-buscador';
import { ModificarDatosPacienteComponent } from './modificar-datos-paciente/modificar-datos-paciente';
import { HistoriaClinicaPacienteComponent } from './historia-clinica-paciente/historia-clinica-paciente';
import { PacienteListaComponent } from './paciente-lista/paciente-lista';
@NgModule({
	declarations: [CardBuscadorComponent,
    PacienteListaComponent,HistoriaClinicaPacienteComponent,ModificarDatosPacienteComponent],
	imports: [IonicModule.forRoot({HistoriaClinicaPacienteComponent,CardBuscadorComponent,
		PacienteListaComponent,ModificarDatosPacienteComponent})],
	exports: [CardBuscadorComponent,
    PacienteListaComponent,HistoriaClinicaPacienteComponent,ModificarDatosPacienteComponent]
})
export class ComponentsModule { }
