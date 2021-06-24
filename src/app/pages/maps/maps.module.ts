import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    LeafletModule.forRoot(),
    MapsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
    NbIconModule,
    NbDatepickerModule
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],
})
export class MapsModule { }
