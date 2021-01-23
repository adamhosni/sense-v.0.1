import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { DeviceDiagnosticsMessage, DeviceInfoMessage } from 'app/@protos/sense_api_settings_pb';
import { DeviceSettingsClient } from 'app/@protos/sense_api_settings_pb_service';


@Injectable({
  providedIn: 'root'
})
export class DeviceSettingsService {

  client : DeviceSettingsClient;
  requestMessage: DeviceInfoMessage;

  constructor() {
    this.client = new DeviceSettingsClient('http://84.209.75.2:8000');
    this.requestMessage = new DeviceInfoMessage;

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
}