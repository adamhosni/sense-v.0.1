import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsComponent } from './maps.component';
import { MapDialogueComponent } from './map-dialogue/map-dialogue.component';
import { LeafletComponent } from './leaflet/leaflet.component';



const routes: Routes = [{
  path: '',
  component: MapsComponent,
  children: [{
    path: 'gmaps',
    component: MapDialogueComponent,
  }, {
    path: 'leaflet',
    component: LeafletComponent,
  },

],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule { }

export const routedComponents = [
  MapsComponent,
  MapDialogueComponent,
  LeafletComponent,

];
