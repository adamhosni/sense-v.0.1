import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { DeviceConfigMessage, DeviceDiagnosticsMessage, DeviceInfoMessage } from 'app/@protos/sense_api_settings_pb';
import { DeviceSettingsClient } from 'app/@protos/sense_api_settings_pb_service';


@Injectable({
  providedIn: 'root'
})
export class DeviceSettingsService {

  client : DeviceSettingsClient;
  requestMessage: DeviceInfoMessage;
  configReqMsg: DeviceConfigMessage;

  constructor() {

    this.requestMessage = new DeviceInfoMessage();
    this.configReqMsg = new DeviceConfigMessage();
    this.configReqMsg.setDeviceConfig(3)


   }

   getDeviceInfo( metadata: grpc.Metadata, ip:string ) : Promise <DeviceInfoMessage>{

    this.client = new DeviceSettingsClient('http://' + ip + ':8000');
    return new Promise((resolve, reject) =>{
      this.client.deviceInfo(this.requestMessage, metadata, (err, response:any) => {

        if (err) {
          return reject(err);;
        }
        resolve(response);
        // console.log(response.toObject());
    });
   });
}

getDeviceDiagnostics(metadata: grpc.Metadata, ip:string) : Promise <DeviceDiagnosticsMessage>{

  this.client = new DeviceSettingsClient('http://' + ip + ':8000');
  return new Promise((resolve, reject) =>{
    this.client.deviceDiagnostics(this.requestMessage, metadata, (err, response:any) => {

      if (err) {
        return reject(err);;
      }
      resolve(response.toObject());
      // console.log(response.toObject());
  });
 });

}

deviceConfig(metadata: grpc.Metadata, ip: string) : Promise <any>{

  this.client = new DeviceSettingsClient('http://' + ip + ':8000');
  return new Promise((resolve, reject) =>{
    this.client.deviceConfig(this.configReqMsg, metadata, (err, response:DeviceConfigMessage) => {

      if (err) {
        return reject(err);;
      }
      resolve(response.toObject());
      // console.log(response.toObject());
  });
 });
}
}