import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { DataQueryClient, ResponseStream } from 'app/@protos/sense_api_dataquery_pb_service';
import { AccessPointsReplyMsg, BasicMacMsg, BTFramePointMsg, WiFiFramePointMsg } from 'app/@protos/sense_core_datamodel_pb';
import { APQuery, BTFrameQuery, ItemQuery, TimeRange, WiFiFrameQuery } from 'app/@protos/sense_core_datarequest_pb';



@Injectable({
  providedIn: 'root'
})


export class DataQueryService {

  client: DataQueryClient;
  requestMsgAP: APQuery;
  requestMsgBTF : BTFrameQuery;
  requestMsgWiFi : WiFiFrameQuery;

  item: ItemQuery;



  constructor() {
    this.client = new DataQueryClient('http://84.209.75.2:8000');

    this.requestMsgAP = new APQuery ();
    this.requestMsgAP.setSortkey(1);
    this.requestMsgBTF = new BTFrameQuery ();
    this.requestMsgWiFi = new WiFiFrameQuery ();

    this.item = new ItemQuery();
    this.item.setExcludenodetection(false);
    this.requestMsgAP.setItem(this.item);
    // console.log(this.item);

    // console.log(this.requestMsgAP);


    // this.requestMsgAP = new APQuery().setSortkey(aa);
   }

   fetchAPItems(metadata: grpc.Metadata) : Promise <Array<any>>{
     var allAP = []
     var today = new Date();
    //  this.requestMsgAP.setSsid('Get-2G-F5DBBD');
    // var item = new ItemQuery();
    // item.setAscorder(false);


    //  let timeRange = new TimeRange();
    //  timeRange.setFromepochms(today.setDate(today.getDate() - 1));
     console.log(this.requestMsgAP.toObject());

    //  timeRange.setToepochms(today.getTime());
    //  console.log(timeRange.toObject());


    //  let item = new ItemQuery();
    //  item.setAscorder(false); // Ascendant order if true
    //  item.setTimerange(timeRange); // Time Range for fetching AP
    //  item.setInterface('wlan3') // Interface for connexion
    //  item.setKey('b6:73:c7:41:58:c5'); // Key must be mac @

    //  this.requestMsgAP.setItem(item);
    //  this.requestMsgAP.setSortkey(2);
    //  this.requestMsgAP.set
    //  console.log(item.toObject());



     return new Promise(async (resolve, reject) =>{
      let a = [];
      const stream = this.client.fetchAPItems(this.requestMsgAP, metadata);
      stream.on('data', (replyMessage : AccessPointsReplyMsg) => {

        console.log(replyMessage.toObject());
        a.push(replyMessage.toObject());

      });
      stream.on('end',function(){
        // console.log(resolve);
        resolve(a)
      });
      stream.on('status',function(){
        console.log(reject);
      });
     });

   }




   fetchBTItems(metadata: grpc.Metadata) : Promise <Array<any>>{
    var allMac = [];


    return new Promise(async (resolve, reject) =>{

     const stream = this.client.fetchBTItems(this.requestMsgBTF, metadata);
     stream.on('data', (replyMessage : BTFramePointMsg) => {

      var dateDetection = new Date(replyMessage.getTime());

      var macMsg = new BasicMacMsg();
      macMsg = replyMessage.getFrame().getInfo();
      var mac = macMsg.getMac();

      var nameMac = replyMessage.getFrame().getName();
      var typeMac = replyMessage.getFrame().getType();
      var vendorMac = replyMessage.getFrame().getInfo().getVendor();

       var macDet = {
         mac : mac.toUpperCase(),
         time : dateDetection,
         name: nameMac,
         type: typeMac,
         vendor: vendorMac
       }
      allMac.push(macDet);

     });



       stream.on('end',() => {

       var result = [];
       allMac.forEach(function (a) {
        if (!this[a.mac]) {
            this[a.mac] = { mac: a.mac, type: a.type, vendor: a.vendor, name: a.name, time: [] };
            result.push(this[a.mac]);
        }
        this[a.mac].time.push(a.time);
    }, Object.create(null));

    console.log(result);
    resolve(result);
  });
     stream.on('status',function(){
      //  console.log(reject);
     });
    });


  }



  fetchWiFiItems(metadata: grpc.Metadata) : Promise <Array<any>>{
    var allMac = [];
    return new Promise(async (resolve, reject) =>{

     const stream = this.client.fetchWiFiItems(this.requestMsgWiFi, metadata);
     stream.on('data', (replyMessage : WiFiFramePointMsg) => {
      var dateDetection = replyMessage.getTime();
      //  console.log(replyMessage.toObject());

       var mac = replyMessage.getFrame().getInfo().getMac();
       var vendor = replyMessage.getFrame().getInfo().getVendor();
       var rssi = replyMessage.getFrame().getRssi();
       var ssid = replyMessage.getFrame().getSsid();


      //  console.log(replyMessage.getFrame().getFrame());

       var macDet = {
        mac : mac.toUpperCase(),
        time : dateDetection,
        vendor: vendor,
        rssi: rssi,
        ssid: ssid
      }
      allMac.push(macDet);


     });
       stream.on('end',function(){

        var result = [];
       allMac.forEach(function (a) {
        if (!this[a.mac]) {
            this[a.mac] = { mac: a.mac, rssi: a.rssi, vendor: a.vendor, ssid: a.ssid, time: [] };
            result.push(this[a.mac]);
        }
        this[a.mac].time.push(a.time);
    }, Object.create(null));

    console.log(result);
    resolve(result);

     });
     stream.on('status',function(){
      //  console.log(reject);
     });
    });

  }

  fetchAP(metadata: grpc.Metadata) : Promise <Array<any>>{
    var allMac = [];
    return new Promise(async (resolve, reject) =>{

     const stream = this.client.fetchWiFiItems(this.requestMsgWiFi, metadata);
     stream.on('data', (replyMessage : WiFiFramePointMsg) => {
      var dateDetection = replyMessage.getTime();
      //  console.log(replyMessage.toObject());

       var mac = replyMessage.getFrame().getInfo().getMac();
       var vendor = replyMessage.getFrame().getInfo().getVendor();
       var rssi = replyMessage.getFrame().getRssi();
       var ssid = replyMessage.getFrame().getSsid();


       var macDet = {
        mac : mac.toUpperCase(),
        time : dateDetection,
        vendor: vendor,
        rssi: rssi,
        ssid: ssid
      }
      allMac.push(macDet);


     });
       stream.on('end',function(){

        var result = [];
       allMac.forEach(function (a) {
        if (!this[a.ssid]) {
            this[a.ssid] = { ssid: a.ssid, mac: [], vendor: a.vendor, rssi: a.rssi, time: [] };
            result.push(this[a.ssid]);
        }
        this[a.ssid].time.push(a.time);
        this[a.ssid].mac.push(a.mac);
    }, Object.create(null));

    console.log(result);
    resolve(result);

     });
     stream.on('status',function(){
      //  console.log(reject);
     });
    });

  }

}