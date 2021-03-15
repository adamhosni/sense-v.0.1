import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { TargetUpdateRequest } from 'app/@protos/sense_api_mac_pb';
import { TargetListUpdateServiceClient } from 'app/@protos/sense_api_mac_pb_service';
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
// import { TargetListQueryServiceClient } from 'app/@protos/sense_core_mac_pb_service';

@Injectable({
  providedIn: 'root'
})
export class TargetListService {

  client: TargetListUpdateServiceClient;
  targetUpdateRequest: TargetUpdateRequest;

  constructor() {
    this.client = new TargetListUpdateServiceClient('http://84.209.75.2:8000');
    this.targetUpdateRequest = new TargetUpdateRequest ();
    this.targetUpdateRequest.setTypemac(2);
    this.targetUpdateRequest.setTargetmacList(['5C:B1:3E:F0:54:29'])
    console.log(this.targetUpdateRequest.toObject());

   }

   targetCreateQuery(metadata: grpc.Metadata){
    return new Promise((resolve, reject) =>{
      this.client.targetCreateQuery(this.targetUpdateRequest, metadata, (err, response:any) => {

        if (err) {
          return reject(err);;
        }
        resolve(response.toObject());
        // console.log(response.toObject());
    });
   });
   }

   targetDeleteQuery(metadata: grpc.Metadata) : Promise <any>{
    return new Promise((resolve, reject) =>{
      this.client.targetCreateQuery(this.targetUpdateRequest, metadata, (err, response:any) => {

        if (err) {
          return reject(err);;
        }
        console.log(response.toObject());

        resolve(response.toObject());
        // console.log(response.toObject());
    });
   });
   }
}
