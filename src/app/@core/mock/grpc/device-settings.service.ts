import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { DeviceConfigMessage, DeviceDiagnosticsMessage, DeviceInfoMessage } from 'app/@protos/sense_api_settings_pb';
import { DeviceSettingsClient } from 'app/@protos/sense_api_settings_pb_service';
import { ServiceError } from 'grpc';


@Injectable({
  providedIn: 'root'
})
export class DeviceSettingsService {

  client : DeviceSettingsClient;
  requestMessage: DeviceInfoMessage;
  configReqMsg: DeviceConfigMessage;
  // config: DeviceConfigMessage.ConfigMap;

  constructor() {
    this.client = new DeviceSettingsClient('http://84.209.75.2:8000');
    this.requestMessage = new DeviceInfoMessage();
    this.configReqMsg = new DeviceConfigMessage();
    this.configReqMsg.setDeviceConfig(3)
    // console.log(this.configReqMsg.toObject());
    // console.log(this.config.LOCATION);


    // this.configReqMsg.

   }

   getDeviceInfo( metadata: grpc.Metadata ) : Promise <DeviceInfoMessage>{
    return new Promise((resolve, reject) =>{
      this.client.deviceInfo(this.requestMessage, metadata, (err, response:any) => {

        if (err) {
          return reject(err);;
        }
        resolve(response.toObject());
        // console.log(response.toObject());
    });
   });
}

getDeviceDiagnostics(metadata: grpc.Metadata) : Promise <DeviceDiagnosticsMessage>{
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

deviceConfig(metadata: grpc.Metadata) : Promise <any>{
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