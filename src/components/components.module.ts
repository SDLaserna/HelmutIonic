import { NgModule } from '@angular/core';
import { CardBuscadorComponent } from './card-buscador/card-buscador';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [CardBuscadorComponent],
	imports: [IonicModule.forRoot(CardBuscadorComponent)],
	exports: [CardBuscadorComponent]
})
export class ComponentsModule {}
