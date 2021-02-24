import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { TriggerRequest } from 'app/@protos/sense_api_advanced_pb';
import { AdvancedServiceClient } from 'app/@protos/sense_api_advanced_pb_service';

@Injectable({
  providedIn: 'root'
})
export class AdvancedSettingsService {

  client : AdvancedServiceClient;
  triggerRequest : TriggerRequest;

  constructor() {
    this.client = new AdvancedServiceClient('http://84.209.75.2:8000');
    this.triggerRequest = new TriggerRequest ();
  }

  deviceRestart(metadata: grpc.Metadata) : Promise <any>{
    return new Promise((resolve, reject) =>{
      this.client.deviceRestart(this.triggerRequest, metadata, (err, response:any) => {

        if (err) {
          return reject(err);;
        }
        resolve(response.toObject());
        // console.log(response.toObject());
    });
   });
  }

  deviceFactoryReset(metadata: grpc.Metadata) : Promise <any>{
    return new Promise((resolve, reject) =>{
      this.client.deviceFactoryReset(this.triggerRequest, metadata, (err, response:any) => {

        if (err) {
          return reject(err);;
        }
        resolve(response.toObject());
        // console.log(response.toObject());
    });
   });
  }

  deviceWebServerTrigger(metadata: grpc.Metadata){

  }
}
