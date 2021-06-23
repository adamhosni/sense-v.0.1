import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { DataQueryClient } from 'app/@protos/sense_api_dataquery_pb_service';
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

  i: ItemQuery;
  t: TimeRange;


  constructor() {


    this.requestMsgAP = new APQuery ();
    this.requestMsgAP.setSortkey(1);

    var today = new Date();
    var yesterday = today.setDate(today.getDate()-1);
    var lastWeek = today.setDate(today.getDate()-7);
    var lastMonth = today.setDate(today.getDate()-10);//Last 10 days
    this.t = new TimeRange();

    this.t.setFromepochms(lastWeek);
    this.t.setToepochms(Date.now());

    this.i = new ItemQuery();
    this.i.setTimerange(this.t);

    this.requestMsgBTF = new BTFrameQuery ();
    this.requestMsgBTF.setItem(this.i);
    console.log(this.requestMsgBTF);


    this.requestMsgWiFi = new WiFiFrameQuery ();
    // console.log(this.requestMsgWiFi);

    // this.requestMsgWiFi.setItem(this.i);
    // console.log(this.requestMsgWiFi);


    this.item = new ItemQuery();
    this.item.setExcludenodetection(false);
    this.requestMsgAP.setItem(this.item);

   }

   fetchAPItems(metadata: grpc.Metadata, ip: string) : Promise <Array<any>>{
     var allAP = []
     var today = new Date();

     console.log(this.requestMsgAP.toObject());

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




   fetchBTItems(metadata: grpc.Metadata, ip: string) : Promise <Array<any>>{
    this.client = new DataQueryClient('http://' + ip + ':8000');
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

  fetchBTItemsRange(metadata: grpc.Metadata, ip: string, timeRange: TimeRange) : Promise <Array<any>>{
    this.client = new DataQueryClient('http://' + ip + ':8000');
    var allMac = [];
    let item = new ItemQuery();
    item.setTimerange(timeRange);
    let requestMsgBTF = new BTFrameQuery ();
    requestMsgBTF.setItem(item);

    return new Promise(async (resolve, reject) =>{

     const stream = this.client.fetchBTItems(requestMsgBTF, metadata);
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

  fetchWiFiItemsRange(metadata: grpc.Metadata, ip: string, timeRange: TimeRange) : Promise <Array<any>>{
    this.client = new DataQueryClient('http://' + ip + ':8000');
    var allMac = [];
    let item = new ItemQuery();
    item.setTimerange(timeRange);
    let requestMsgWiFi = new WiFiFrameQuery ();
    requestMsgWiFi.setItem(item);
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

    // console.log(result);
    resolve(result);

     });
     stream.on('status',function(){
      //  console.log(reject);
     });
    });

  }

  fetchWiFiItems(metadata: grpc.Metadata, ip: string) : Promise <Array<any>>{
    this.client = new DataQueryClient('http://' + ip + ':8000');
    var allMac = [];
    // let t = new TimeRange();
    // t.setFromepochms(1622562955);
    // t.setToepochms(1623772555);
    // let i = new ItemQuery();
    // i.setTimerange(t);
    // this.requestMsgWiFi.setItem(i);
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

    // console.log(result);
    resolve(result);

     });
     stream.on('status',function(){
      //  console.log(reject);
     });
    });

  }

  fetchAP(metadata: grpc.Metadata, ip: string) : Promise <Array<any>>{
    this.client = new DataQueryClient('http://' + ip + ':8000');
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