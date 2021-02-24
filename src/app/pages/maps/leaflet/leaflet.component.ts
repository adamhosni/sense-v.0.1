import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
import 'leaflet.markercluster';

import { NbDialogService } from '@nebular/theme';
import { GmapsComponent } from '../map-dialogue/gmaps.component';

interface Sensor {
  lat: number;
  lng: number;
  desc: string;
  id: string;
}

@Component({
  selector: 'ngx-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  template: `
  <link rel="stylesheet" href="https://leaflet.github.io/Leaflet.markercluster/dist/MarkerCluster.css" />
<link rel="stylesheet" href="https://leaflet.github.io/Leaflet.markercluster/dist/MarkerCluster.Default.css" />
<script src="https://leaflet.github.io/Leaflet.markercluster/dist/leaflet.markercluster-src.js"></script>
    <nb-card >
      <nb-card-header>Sense Map</nb-card-header>
      <nb-card-body >
        <div id="map" ></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class LeafletComponent implements AfterViewInit{

  map;
  saudiCoor = {
    lat: 23.2500874,
    lng: 42.1680221,
  };
  zoomLevel = 6;

  darkLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      minZoom: 1,
      maxZoom: 17,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  });
  // streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  //   	maxZoom: 19,
  //   	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
  // });
  baseMaps = {
    // "Streets": this.streetLayer,
    "<span style='color: gray'>Smooth Dark</span>": this.darkLayer
  };

  wRangeExist : boolean = false;
  bRangeExist : boolean = false;

  smallIcon = new L.Icon({
    iconUrl: 'marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });
  markers = L.markerClusterGroup();


constructor(private router: Router, private dialogService: NbDialogService) { }

ngAfterViewInit(): void{

  this.createMap();
  this.initSensors();
}
  createMap(){

    this.map = L.map('map',{
      layers: [this.darkLayer],//, this.streetLayer
      zoom: this.zoomLevel,
      center: [this.saudiCoor.lat, this.saudiCoor.lng],
    });
   // L.control.layers(this.baseMaps).addTo(this.map);

  }

  initSensors(){
    let sensors: Sensor[] = [];
    sensors = this.getAllSensors();
   // sensors.push(sensor);

      sensors.forEach(sensor => {
        var latLng = [sensor.lat,sensor.lng];
        var template = '<form id="popup-form">\
        <table class="popup-table">\
          <tr class="popup-table-row">\
            <th class="popup-table-header">Device number:</th>\
            <td id="value-id" class="popup-table-data">'+sensor.id+'</td>\
          </tr>\
          <tr class="popup-table-row">\
            <th class="popup-table-header">Location:</th>\
            <td id="value-location" class="popup-table-data">25 Rue de la liberté</td>\
          </tr>\
          <tr class="popup-table-row">\
            <th class="popup-table-header">Internal Temperature (°C):</th>\
            <td id="value-intemp" class="popup-table-data">10</td>\
          </tr>\
          <tr class="popup-table-row">\
            <th class="popup-table-header">External Temperature (°C):</th>\
            <td id="value-extemp" class="popup-table-data">22</td>\
          </tr>\
          <tr class="popup-table-row">\
            <th class="popup-table-header">Humidity:</th>\
            <td id="value-humidity" class="popup-table-data">10%</td>\
          </tr>\
        </table>\
        <div class="button-center"><button id="button-wifi" class="button-range" type="button">Wifi Range</button>\
        <button id="button-bth" class="button-range" type="button">Bluetooth Range</button></div>\
        <p><button id="button-details" class="button-details" type="button">Device Dashboard</button>\
      </form>';
        this.addMarker(latLng, template, true);

      });
  }

  addMarker(latLng, text, open) {

    const marker = L.marker(latLng, { icon: this.smallIcon });

    if (open) {
     // marker.addTo(this.map).bindPopup(text);//.openPopup()
      this.markers.addLayer(marker.bindPopup(text));
    } else {
      marker.addTo(this.map).bindPopup(text);
    }
    this.map.addLayer(this.markers);

  marker.on('click', (clickEvent) => {
    this.centerLeafletMapOnMarker (this.map, marker);

  });
}

centerLeafletMapOnMarker(map, marker) {

  var latLng = [ marker.getLatLng() ];
  var markerBounds = L.latLngBounds(latLng);

  var wifiRange = L.circle(marker.getLatLng(), {
    color: 'red',
    fillColor: '#f02',
    fillOpacity: 0.3,
    radius: 500,
    weight: 2,
    opacity: 0.6,
  });

  var bthRange = L.circle(marker.getLatLng(), {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.3,
    radius: 300,
    weight: 2,
    opacity: 0.6,
  })

  if (!map.getBounds().equals(markerBounds)){
    map.flyToBounds(markerBounds, {'duration':1, 'animate':true, 'maxZoom':16} );
    console.log(map.getBounds().equals(markerBounds));
  }

  document.getElementById("button-wifi").addEventListener("click", Event => {
    this.showWifiRange(map, this.wRangeExist, marker, wifiRange);
  });

  document.getElementById("button-bth").addEventListener("click", Event => {
    this.showBluetoothRange(map, this.bRangeExist, bthRange);
  });

  document.getElementById("button-details").addEventListener("click", Event => {
    var sensor = this.getSensorByLatLng(latLng);
    this.goToDash(sensor);
  });

}

goToDash(sensor ){

  this.router.navigate(['sense-dashboard',sensor]).then( (e) => {
    if (e) {
      console.log("Navigation Successful");
    } else {
      console.log("Navigation has failed!");
    }
  });
}

getSensorByLatLng(latLng){

  let sensors: Sensor[] = [];
    sensors = this.getAllSensors();
   // sensors.push(sensor);
  var chosenSensor;

      sensors.forEach(sensor => {
        let sensorLatLng = [sensor.lat, sensor.lng] ;
        console.log(latLng[0].lat);
        console.log(sensorLatLng[0]);
        if (latLng[0].lat === sensorLatLng[0]) chosenSensor = sensor;
      });
      return chosenSensor;
}

deleteWifiRange(map, rangeExist, range){
  if (rangeExist)map.removeLayer(range);
  this.wRangeExist = false;
}
deleteBluetoothRange(map, rangeExist, range){
  if (rangeExist)map.removeLayer(range);
  this.bRangeExist = false;
}


showWifiRange (map, rangeExist, marker, wifiRange){

  var customPopup = '<b>WiFi Sensor Detection:\
  <p> Number of devices detected: 24 \
  <button id="wifiDetails" class="wifiDetails" type="button">More Details</button>\
  ';
  var customOptions = {'maxWidth': 500,'className': 'wifiCustom'};

  if (rangeExist) {
    this.deleteWifiRange(map, rangeExist, wifiRange);
    console.log(rangeExist);
  }
  else {
    wifiRange.addTo(map).bindPopup(customPopup, customOptions)
    .on("popupopen", (a) => {
      var popUp = a.target.getPopup();
      popUp.getElement()
     .querySelector(".wifiDetails")
     .addEventListener("click", e => {
       this.showMoreWifi(map, marker, wifiRange);


     });
  });
    this.wRangeExist = true;
  }


}

 open(hasBackdrop: boolean, deviceId: string, listWifis: any) {

  this.dialogService.open(GmapsComponent, {
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
  console.log("BTN Works");
  this.deleteWifiRange(map, 1, wifiRange);

  var wifi500 = L.circle(marker.getLatLng(), {
    color: 'yellow',
    fillColor: 'yellow',
    fillOpacity: 0.3,
    radius: 500,
    weight: 2,
    opacity: 0.6,
  });
  wifi500.addTo(map);

  var wifi300 = L.circle(marker.getLatLng(), {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.4,
    radius: 300,
    weight: 2,
    opacity: 0.8,
  });
  wifi300.addTo(map);

  var wifi100 = L.circle(marker.getLatLng(), {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 100,
    weight: 2,
    opacity: 0.6,
  });
  wifi100.addTo(map);
  //______________________
var deviceId = this.getSensorByLatLng([marker.getLatLng()]).id;
let listWifis = {wifi100, wifi300, wifi500}
  this.open(false, deviceId, listWifis);


}
showBluetoothRange (map, rangeExist, bthRange){
  var customPopup = "Information about bt sensor range<br/> Number of devices detected: 15";
  var customOptions = {'maxWidth': 500,'className': 'bluetoothCustom'};

  if (rangeExist) {
    this.deleteBluetoothRange(map, rangeExist, bthRange);
    console.log(rangeExist);
  }
  else {
    bthRange.addTo(map).bindPopup(customPopup, customOptions);
    this.bRangeExist = true;
  }
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
