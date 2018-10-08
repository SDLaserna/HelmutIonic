import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CardBuscadorComponent } from './card-buscador/card-buscador';
import { PacienteListaComponent } from './paciente-lista/paciente-lista';
@NgModule({
	declarations: [CardBuscadorComponent,
    PacienteListaComponent],
	imports: [IonicModule.forRoot(CardBuscadorComponent,
		PacienteListaComponent)],
	exports: [CardBuscadorComponent,
    PacienteListaComponent]
})
export class ComponentsModule {}
