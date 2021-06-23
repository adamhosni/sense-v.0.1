import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
import { Feature, FeatureCollection, LineString, Point } from 'geojson';

import { NbDialogService } from '@nebular/theme';
import { MapDialogueComponent } from '../map-dialogue/map-dialogue.component';

import 'leaflet.heat/dist/leaflet-heat.js'
import { BackDevicesService } from 'app/@core/mock/grpc/back/back-devices.service';
import { grpc } from '@improbable-eng/grpc-web';
import { DeviceSettingsService } from 'app/@core/mock/grpc/device-settings.service';
import { DataQueryService } from 'app/@core/mock/grpc/data-query.service';
import { TimeRange } from 'app/@protos/sense_core_datarequest_pb';


interface Sensor {
  id: string,
  lat: number,
  lng: number,
  desc: string,
}

interface SensorNorway {
  id: string,
  lat: number,
  lng: number,
  desc: string,
  location: string,
  extemp: number,
  intemp: number,
  humidity: number,
  wfdd: number,
  btdd: number,
}

@Component({
  selector: 'ngx-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  template: `
  <link rel="stylesheet" href="https://leaflet.github.io/Leaflet.markercluster/dist/MarkerCluster.css" />
<link rel="stylesheet" href="https://leaflet.github.io/Leaflet.markercluster/dist/MarkerCluster.Default.css" />
<script src="https://leaflet.github.io/Leaflet.markercluster/dist/leaflet.markercluster-src.js"></script>
<script src="https://raw.githubusercontent.com/Harvinator/Leaflet.heat/dcf67f1aef555e0c214c2b6f904cf09a28d1c012/src/HeatLayer.js"></script>
<script src="leaflet-heat.js"></script>
    <nb-card >
      <nb-card-header>Sense Map</nb-card-header>
      <nb-card-body >
        <div id="map" ></div>
        <div class="leaflet-bottom leaflet-right">
    </div>
      </nb-card-body>

    </nb-card>
  `,
})
export class LeafletComponent implements AfterViewInit{

  map;

    darkLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      // minZoom: 1,
      maxZoom: 17,
      // attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });
    streetLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    	maxZoom: 19,
    	// attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    transportLayer = L.tileLayer('http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    });
    deLormeLayer = L.tileLayer('http://services.arcgisonline.com/arcgis/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    });
    heatLayer = new L.LayerGroup();

  wifiRange: L.Circle;
  bthRange: L.Circle;

  wRangeExist : boolean = false;
  bRangeExist : boolean;
  pointsLayerWifi: L.GeoJSON;
  pointsLayerBlue: L.GeoJSON;

  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });
  markers = L.markerClusterGroup();

  jwToken: string;
  deviceDiag: any;
  internaltemp: number;
  externaltemp: number;
  humidity: number;

  sensors: any = [];

  constructor(private router: Router, private dialogService: NbDialogService, private backDevService: BackDevicesService,
              private deviceSettingsService: DeviceSettingsService, private daraQueryService: DataQueryService) {
    this.jwToken = localStorage.getItem('access_token');
  }

ngAfterViewInit(): void{
  this.bRangeExist = false;

  this.createMap();
  this.initSensors();

  //Add Static Markers
  var staticMarkers = this.getAllSensors();
  staticMarkers.forEach(marker => {
    this.addMarker({lat: marker.lat, lng: marker.lng}, marker.id);

  });

}
  createMap(){

    const zoomLevel = 6;
    const saudiCoor = {
      lat: 23.2500874,
      lng: 42.1680221,
    };

    this.map = L.map('map',{
      layers: [this.darkLayer, this.streetLayer, ],//this.transportLayer
      zoom: zoomLevel,
      center: [saudiCoor.lat, saudiCoor.lng],
    });

    const baseMaps = {
      "Streets": this.streetLayer,
      "Dark": this.transportLayer,
      "DeLorme": this.deLormeLayer,
      "<span style='color: gray'>Smooth Dark</span>": this.darkLayer};
      var overlayMaps = {
      "Heat": this.heatLayer
      };


      L.control.layers(baseMaps, overlayMaps).addTo(this.map);


//    var myLines: LineString = {
//     "type": "LineString",
//     "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
//   };
// L.geoJSON(myLines).addTo(this.map);



// var point: Point = {
//   "type": "Point",
//   "coordinates": [-100, 40]
// };
// L.geoJSON(point, {
//   pointToLayer: function (feature, latlng) {
//       return L.circleMarker(latlng, {
//           // Stroke properties
//           color: '#5EA4D4',
//           opacity: 0.75,
//           weight: 2,

//           // Fill properties
//           fillColor: '#5EA4D4',
//           fillOpacity: 0.25,

//           radius: 2
//       });
//   }
// }).addTo(this.map);



  }


  //Get The Coordianates
  deviceConfig( auth, ip ): void{

    this.deviceSettingsService.deviceConfig(auth, ip).then(response => {

      let coordinates = {lat: response.deviceLocationConfig.latitude,
                        lng: response.deviceLocationConfig.longitude};

      this.sensors.push(coordinates);

      this.addMarker(coordinates, ip)
    });
  }

  getDeviceDiagnostics( auth, ip: string, marker ){

    this.deviceSettingsService.getDeviceDiagnostics(auth, ip).then(response => {

      this.deviceDiag = response;
      this.internaltemp = (this.deviceDiag.internaltemp)/1000;
      this.externaltemp = this.deviceDiag.externaltemp.toFixed(2);
      this.humidity = this.deviceDiag.exthumidity.toFixed(2);

      this.appendPopupToMarker(ip, marker, this.internaltemp, this.externaltemp, this.humidity);

    });
}

  initSensors(){

    this.backDevService.getAllDevices(this.jwToken).subscribe( data => {

      for(let dev in data) {
        let child = data[dev];
        let tokenSense = localStorage.getItem('token_sense' + child.dIp);


        if ( tokenSense !==  null){

          const auth = new grpc.Metadata();
          auth.headersMap ["Authorization"] = ['Bearer ' + tokenSense];

          this.deviceConfig(auth, child.dIp);
        }
        this.map.addLayer(this.markers);
      }
    });

  }


addMarker(latLng, ip: string): void {

  let tokenSense = localStorage.getItem('token_sense' + ip);

  if ( tokenSense !==  null){
    const auth = new grpc.Metadata();
    auth.headersMap ["Authorization"] = ['Bearer ' + tokenSense];

    const marker = L.marker(latLng, { icon: this.smallIcon });

    this.getDeviceDiagnostics(auth, ip, marker);

    var tabHeat = [];
    tabHeat.push(latLng.lat);
    tabHeat.push(latLng.lng);

    this.addHeatToMarker(tabHeat);
  }
}

addHeatToMarker(tabHeat){

  var intensity = Math.random();

  tabHeat.push(intensity);
        L.heatLayer([ tabHeat ],
           {radius: 80,
            blur: 50,
            maxZoom: 10,
            max: 1,
            minOpacity: 0.5,
            gradient: {
                0.0: 'green',
                // 0.3: 'green',
                0.5: 'yellow',
                1.0: 'red' // >100
            }}).addTo(this.heatLayer);
}

appendPopupToMarker(ip, marker, inttemp:number, exttemp: number, humidity){

  //Creating the Popup
  var text = new L.Popup();
    text.setContent(
      `<ng-template >
      <form id="popup-form">
        <table class="popup-table">
          <tr class="popup-table-row">
            <th class="popup-table-header">Device IP:</th>
            <td id="value-id" class="popup-table-data"><b>${ip}</td>
          </tr>
          <tr class="popup-table-row">
            <th class="popup-table-header">Latitude:</th>
            <td id="value-lat" class="popup-table-data">${marker.getLatLng().lat}</td>
          </tr>
          <tr class="popup-table-row">
            <th class="popup-table-header">Longitude:</th>
            <td id="value-lng" class="popup-table-data">${marker.getLatLng().lng}</td>
          </tr>
          <tr class="popup-table-row">
            <th class="popup-table-header">Inter Temperature:</th>
            <td id="value-intemp" class="popup-table-data">${inttemp.toFixed(2)} °C</td>
          </tr>
          <tr class="popup-table-row">
            <th class="popup-table-header">Exter Temperature:</th>
            <td id="value-extemp" class="popup-table-data">${exttemp} °C</td>
          </tr>
          <tr class="popup-table-row">
            <th class="popup-table-header">Humidity:</th>
            <td id="value-humidity" class="popup-table-data">${humidity} %</td>
          </tr>
        </table>
        <div class="button-center"><button id="button-wifi" class="button-range" type="button">Wifi Range</button>
        <button id="button-bth" class="button-range" type="button">Bluetooth Range</button></div>
        <button id="button-details" class="button-details" type="button"><b>Device Dashboard</button>
      </form>
      </ng-template>
      `) ;
      var popUpOptions: L.PopupOptions ={
        'maxWidth': 500,
        'className' : 'custom',

      }
      this.markers.addLayer(marker.bindPopup(text, popUpOptions));


      marker.on('click', (clickEvent) => {
        // Center view on Marker
        this.centerLeafletMapOnMarker (this.map, marker, ip);

        //Redirect to sense-dash when clicking on Dash Popup
        document.getElementById("button-details").addEventListener("click", Event => {
          this.router.navigate(['pages/sense-dashboard',ip]);

        });
      });
}

centerLeafletMapOnMarker(map:L.Map, marker:L.Marker, ip: string) {

  var latLng = [ marker.getLatLng() ];
  var markerBounds = L.latLngBounds(latLng);

  this.wifiRange = L.circle(marker.getLatLng(), {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.05,
    radius: 250,
    weight: 2,
    opacity: 0.3,
  });

  this.bthRange = L.circle(marker.getLatLng(), {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.05,
    radius: 100,
    weight: 2,
    opacity: 0.3,
  })


  let tokenSense = localStorage.getItem('token_sense' + ip);
    const auth = new grpc.Metadata();
    auth.headersMap ["Authorization"] = ['Bearer '+tokenSense];

    var timerange: TimeRange = new TimeRange();

    const today = new Date();//.setHours(0,0,0,0)
    const yesterday = new Date();
    yesterday.setDate(new Date().getDate() - 1);
    // yesterday.getTime();

    timerange.setFromepochms(yesterday.getTime());//1621810800000
    timerange.setToepochms(today.getTime());//1622156400000
    var nwfdev= this.fetchWiFiItems(auth, ip, timerange);
    console.log(this.nWFdevices);



    var nbtdev= this.fetchBTItems(auth, ip, timerange);

  if (!map.getBounds().equals(markerBounds)){
    map.flyToBounds(markerBounds, {'duration':1.5 , 'animate':true, 'maxZoom':16} );
  }

  document.getElementById("button-wifi").addEventListener("click", Event => {
    this.showWifiRange(map, nwfdev);
  });

  document.getElementById("button-bth").addEventListener("click", Event => {
    this.showBTRange(map, nbtdev);
  });


}

onEventStartEndRange(event){
  if (event.end !== undefined){
    // console.log(event);
    let startDate = (event.start).getTime();
    let endDate = (event.end).getTime();
    let timerange = new TimeRange();
    timerange.setFromepochms(startDate);
    timerange.setToepochms(endDate);

    this.backDevService.getAllDevices(this.jwToken).subscribe( data => {

      for(let dev in data) {
        let child = data[dev];
        let tokenSense = localStorage.getItem('token_sense' + child.dIp);


        if ( tokenSense !==  null){

          const auth = new grpc.Metadata();
          auth.headersMap ["Authorization"] = ['Bearer ' + tokenSense];
          this.fetchBTItems( auth, child.dIp, timerange);

          // this.deviceConfig(auth, child.dIp);
        }
        // this.map.addLayer(this.markers);
      }
    });

    // let tokenSense = localStorage.getItem('token_sense' + this.deviceIp);
    // const auth = new grpc.Metadata();
    // auth.headersMap ["Authorization"] = ['Bearer '+tokenSense];
    // this.fetchBTItems( auth, this.deviceIp, startDate, endDate);
  }
}

layerGroupBlue = new L.LayerGroup();

showBTRange(map, nbtdev){
  if (this.bRangeExist) {
    map.removeLayer(this.layerGroupBlue);

    this.bRangeExist = !this.bRangeExist;

    console.log(this.bRangeExist);
  }
  else {

    this.bRangeExist = !this.bRangeExist;
    console.log(this.bRangeExist);

    this.layerGroupBlue.clearLayers();
    this.layerGroupBlue.addTo(map);
    this.layerGroupBlue.addLayer(this.bthRange);

    var bounds = this.bthRange.getBounds();
    var southWest = bounds.getSouthWest();
	  var northEast = bounds.getNorthEast();
    var lngSpan = northEast.lng - southWest.lng ;
    var latSpan = northEast.lat - southWest.lat ;
    var i = 0;
      while ( i < nbtdev ){

        console.log(i);

        var lat = southWest.lat + latSpan * Math.random() ;
        var lng = southWest.lng + lngSpan * Math.random();
        var data_points: FeatureCollection = {
          "type": "FeatureCollection",
          "features": [
          { "type": "Feature", "properties": { "name": this.tabMacBt[i] }, "geometry": { "type": "Point", "coordinates": [ lng, lat ] } } ]
        };

        this.pointsLayerBlue = L.geoJSON(null, {
          pointToLayer: function(feature,latlng){
            var label = String(feature.properties.name);
            return new L.CircleMarker(latlng, {
              radius: 1,
              color: 'blue',
              opacity: 0.75,
              weight: 7
            }).bindTooltip(label, {permanent: false, opacity: 0.7});
          }
        });
        this.pointsLayerBlue.addData(data_points);
        this.layerGroupBlue.addLayer(this.pointsLayerBlue);

        i++;
      }

  }
}

nWFdevices: number;
tabMacWf = [];
fetchWiFiItems( auth: any, ip: string, timerange ){

  this.daraQueryService.fetchWiFiItemsRange(auth, ip, timerange).then(resp =>{

      let wfDevices = resp;
      wfDevices.forEach( device => {
        this.tabMacWf.push(device.mac);

      });
      this.nWFdevices = wfDevices.length;
    });
    return this.nWFdevices;
}

nBTdevices: number;
tabMacBt = [];
fetchBTItems( auth: any, ip: string , timerange){

  this.daraQueryService.fetchBTItemsRange(auth, ip, timerange).then(resp =>{

      let btDevices = resp;
      btDevices.forEach( device => {
        this.tabMacBt.push(device.mac);
      });
      this.nBTdevices = btDevices.length;
    });
    return this.nBTdevices;
}


layerGroupWifi = new L.LayerGroup();

showWifiRange (map, nwfdev){
  if (this.wRangeExist) {
    map.removeLayer(this.layerGroupWifi);
    this.wRangeExist = !this.wRangeExist;
    console.log(this.wRangeExist);
  }
  else {

    this.wRangeExist = !this.wRangeExist;
    console.log(this.wRangeExist);

    this.layerGroupWifi.clearLayers();
    this.layerGroupWifi.addTo(map);
    this.layerGroupWifi.addLayer(this.wifiRange);

    var bounds = this.wifiRange.getBounds();
    var southWest = bounds.getSouthWest();
	  var northEast = bounds.getNorthEast();
    var lngSpan = northEast.lng - southWest.lng ;
    var latSpan = northEast.lat - southWest.lat ;
    var i = 0;
      while ( i < nwfdev ){

        console.log(i);

        var lat = southWest.lat + latSpan * Math.random() ;
        var lng = southWest.lng + lngSpan * Math.random();
        var data_points: FeatureCollection = {
          "type": "FeatureCollection",
          "features": [
          { "type": "Feature", "properties": { "name": this.tabMacWf[i] }, "geometry": { "type": "Point", "coordinates": [ lng, lat ] } } ]
        };

        this.pointsLayerWifi = L.geoJSON(null, {
          pointToLayer: function(feature,latlng){
            var label = String(feature.properties.name) // .bindTooltip can't use straight 'feature.properties.attribute'
            return new L.CircleMarker(latlng, {
              radius: 1,
              color: 'red',
              opacity: 0.75,
              weight: 7
            }).bindTooltip(label, {permanent: false, opacity: 0.7});
          }
        });
        this.pointsLayerWifi.addData(data_points);
        this.layerGroupWifi.addLayer(this.pointsLayerWifi);

        i++;
      }

  }


}

 open(hasBackdrop: boolean, deviceId: string, listWifis: any) {

  this.dialogService.open(MapDialogueComponent, {
    hasBackdrop,
    dialogClass: 'model-full',
    closeOnBackdropClick:true,

    context: {
     // title: 'Enter template name',
      deviceId: deviceId,
      listWifis: listWifis,
      map: this.map,
    },  });
}


showMoreWifi(map, marker, wifiRange){
  map.removeLayer(this.layerGroupWifi);
  this.wRangeExist = !this.wRangeExist;

  var wifi500 = L.circle(marker.getLatLng(), {
    color: 'yellow',
    fillColor: 'yellow',
    fillOpacity: 0.2,
    radius: 500,
    weight: 2,
    opacity: 0.4,
  });
  wifi500.addTo(map);

  var wifi300 = L.circle(marker.getLatLng(), {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.2,
    radius: 300,
    weight: 2,
    opacity: 0.4,
  });
  wifi300.addTo(map);

  var wifi100 = L.circle(marker.getLatLng(), {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.25,
    radius: 100,
    weight: 2,
    opacity: 0.3,
  });
  wifi100.addTo(map);

  // var pl = this.pointsLayer.addTo(map);

  //______________________
// var deviceId = this.getSensorByLatLng([marker.getLatLng()]).id;
// let listWifis = {wifi100, wifi300, wifi500, pl}
  // this.open(false, deviceId, listWifis);


}






  getAllSensors(){

    let sensor1: Sensor = {
      lng: 39.8837078586038,
      lat: 21.3892533220828,
      desc: "Information about sensor 1",
      id: "P1"
    }
    let sensor2: Sensor = {
      lng: 39.87635399081,
      lat: 21.3841929901112,
      desc: "Information about sensor 2",
      id: "P2"
    }
    let sensor3: Sensor = {
      lng: 39.8818532675329,
      lat: 21.3727665064236,
      desc: "Information about sensor 3",
      id: "P3"
    }
    let sensor4: Sensor = {
      lng: 39.8934579204451,
      lat: 21.3634992738935,
      desc: "Information about sensor 4",
      id: "P4"
    }
    let sensor5: Sensor = {
      lng: 39.9006863005136,
      lat: 21.3711177447891,
      desc: "Information about sensor 5",
      id: "P5"
    }
    let sensor6: Sensor = {
      lng: 39.892697589233,
      lat: 21.394660612454,
      desc: "Information about sensor 6",
      id: "P6"
    }
    let sensor7: Sensor = {
      lng: 39.9505995550427,
      lat: 21.334674387227,
      desc: "Information about sensor 7",
      id: "P7"
    }
    let sensor8: Sensor = {
      lng: 39.8622278068378,
      lat: 21.4267045161644,
      desc: "Information about sensor 6",
      id: "P8"
    }

    let sensor9: Sensor = {
      lng: 39.864781464973,
      lat: 21.4235041011829,
      desc: "Information about sensor 6",
      id: "P9"
    }
    let sensor10: Sensor = {
      lng: 39.8788276912772,
      lat: 21.4200944356745,
      desc: "Information about sensor 6",
      id: "P10"
    }
    let sensor11: Sensor = {
      lng: 39.8873745377238,
      lat: 21.4172449706193,
      desc: "Information about sensor 6",
      id: "P11"
    }
    let sensor12: Sensor = {
      lng: 39.8773281729246,
      lat: 21.4161434328237,
      desc: "Information about sensor 6",
      id: "P12"
    }
    let sensor13: Sensor = {
      lng: 39.9041980644818,
      lat: 21.3984153260848,
      desc: "Information about sensor 6",
      id: "P13"
    }
    let sensor14: Sensor = {
      lng: 39.8568764856899,
      lat: 21.4362350064081,
      desc: "Information about sensor 6",
      id: "P14"
    }
    let sensor15: Sensor = {
      lng: 39.8943355528259,
      lat: 21.3905745680924,
      desc: "Information about sensor 6",
      id: "P15"
    }
    let sensor16: Sensor = {
      lng: 39.8976159234688,
      lat: 21.4548374946379,
      desc: "Information about sensor 6",
      id: "P16"
    }
    let sensor17: Sensor = {
      lng: 39.9040014132449,
      lat: 21.4326202590512,
      desc: "Information about sensor 6",
      id: "P17"
    }
    let sensor18: Sensor = {
      lng: 39.8842773276468,
      lat: 21.4116476352212,
      desc: "Information about sensor 6",
      id: "P18"
    }
    let sensor19: Sensor = {
      lng: 39.8837116574599,
      lat: 21.4170945583155,
      desc: "Information about sensor 6",
      id: "P19"
    }
    let sensor20: Sensor = {
      lng: 39.8929591201133,
      lat: 21.426299988138,
      desc: "Information about sensor 6",
      id: "P20"
    }
    let sensor21: Sensor = {
      lng: 39.8992932432066,
      lat: 21.4018798227671,
      desc: "Information about sensor 6",
      id: "P21"
    }
    let sensor22: Sensor = {
      lng: 39.892964119979,
      lat: 21.4125184046726,
      desc: "Information about sensor 6",
      id: "P22"
    }
    let sensor23: Sensor = {
      lng: 39.8880898823331,
      lat: 21.4092972253623,
      desc: "Information about sensor 6",
      id: "P23"
    }
    let sensor24: Sensor = {
      lng: 39.8777796479512,
      lat: 21.4135671824687,
      desc: "Information about sensor 6",
      id: "P24"
    }
    let sensor25: Sensor = {
      lng: 39.9090299711926,
      lat: 21.3884003849043,
      desc: "Information about sensor 6",
      id: "P25"
    }
    let sensor26: Sensor = {
      lng: 39.9797168816498,
      lat: 21.3733245740706,
      desc: "Information about sensor 6",
      id: "P26"
    }
    let sensor27: Sensor = {
      lng: 39.9884128964555,
      lat: 21.3686794125304,
      desc: "Information about sensor 6",
      id: "P27"
    }
    let sensor28: Sensor = {
      lng: 39.9862579142546,
      lat: 21.3734775780012,
      desc: "Information about sensor 6",
      id: "P28"
    }
    let sensor29: Sensor = {
      lng: 39.9846109410572,
      lat: 21.356135609431,
      desc: "Information about sensor 6",
      id: "P29"
    }
    let sensor30: Sensor = {
      lng: 39.9953301667742,
      lat: 21.3400529927503,
      desc: "Information about sensor 6",
      id: "P30"
    }
    let sensor31: Sensor = {
      lng: 39.9773993082124,
      lat: 21.3366203101518,
      desc: "Information about sensor 6",
      id: "P31"
    }
    let sensor32: Sensor = {
      lng: 39.959136553045,
      lat: 21.3462293145453,
      desc: "Information about sensor 6",
      id: "P32"
    }
    let sensor33: Sensor = {
      lng: 39.9653035870079,
      lat: 21.3520734430784,
      desc: "Information about sensor 6",
      id: "P33"
    }
    let sensor34: Sensor = {
      lng: 39.9695070167099,
      lat: 21.3529009770434,
      desc: "Information about sensor 6",
      id: "P34"
    }
    let sensor38: Sensor = {
      lng: 39.9670945028223,
      lat: 21.3542310108216,
      desc: "Information about sensor 6",
      id: "P38"
    }
    let sensor39: Sensor = {
      lng: 39.9748853184002,
      lat: 21.3636849424547,
      desc: "Information about sensor 6",
      id: "P39"
    }
    let sensor40: Sensor = {
      lng: 39.9777254756245,
      lat: 21.3504964379769,
      desc: "Information about sensor 6",
      id: "P40"
    }
    let sensor41: Sensor = {
      lng: 39.9829220426804,
      lat: 21.3472906805655,
      desc: "Information about sensor 6",
      id: "P41"
    }
    let sensor42: Sensor = {
      lng: 39.9890305390963,
      lat: 21.3575041335742,
      desc: "Information about sensor 6",
      id: "P42"
    }
    let sensor43: Sensor = {
      lng: 39.965826907818,
      lat: 21.3471045501625,
      desc: "Information about sensor 6",
      id: "P43"
    }
    let sensor44: Sensor = {
      lng: 39.7793535126898,
      lat: 21.4243582499648,
      desc: "Information about sensor 6",
      id: "P44"
    }
    let sensor45: Sensor = {
      lng: 39.9312933882401,
      lat: 21.3755026897279,
      desc: "Information about sensor 6",
      id: "P45"
    }
    let sensor46: Sensor = {
      lng: 39.9682858651961,
      lat: 21.3283379130386,
      desc: "Information about sensor 6",
      id: "P46"
    }
    let sensor47: Sensor = {
      lng: 39.9438527558251,
      lat: 21.3412884991414,
      desc: "Information about sensor 6",
      id: "P47"
    }
    let sensor48: Sensor = {
      lng: 39.9805975987965,
      lat: 21.3541462083455,
      desc: "Information about sensor 6",
      id: "P48"
    }
    let sensor49: Sensor = {
      lng: 39.9858835025128,
      lat: 21.3514199059289,
      desc: "Information about sensor 6",
      id: "P49"
    }
    let sensor50: Sensor = {
      lng: 39.9758070798749,
      lat: 21.3430296112207,
      desc: "Information about sensor 6",
      id: "P59"
    }


    return [sensor1, sensor2, sensor3, sensor4, sensor5, sensor6, sensor7, sensor8, sensor9, sensor10, sensor11, sensor12, sensor13, sensor14, sensor15
      , sensor16, sensor17, sensor18, sensor19, sensor20, sensor21, sensor22, sensor23, sensor24, sensor25, sensor26, sensor27, sensor28, sensor29
      , sensor30, sensor31, sensor32, sensor33, sensor34, sensor38, sensor39, sensor40, sensor41, sensor42, sensor43, sensor44, sensor45, sensor46
      , sensor47, sensor48, sensor49, sensor50]

  }

}
