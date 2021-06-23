import { NgModule } from '@angular/core';
// import { GoogleMapsModule } from '@angular/google-maps';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// import { NgxEchartsModule } from 'ngx-echarts';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbListModule, NbTabsetModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    LeafletModule.forRoot(),
    MapsRoutingModule,
    // NgxEchartsModule,
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
    NbIconModule,
    NbDatepickerModule
    // NbTabsetModule,
    // NbListModule
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],
})
export class MapsModule { }
