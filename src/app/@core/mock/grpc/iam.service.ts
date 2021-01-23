import { Injectable } from '@angular/core';

import { IAMServiceClient } from '../../../@protos/sense_api_iam_pb_service';
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import { grpc } from '@improbable-eng/grpc-web';

@Injectable({
  providedIn: 'root'
})
export class IamService {

  client: IAMServiceClient;

  requestMessage: google_protobuf_empty_pb.Empty;

  constructor() {
    this.client = new IAMServiceClient('http://84.209.75.2:8000');

    this.requestMessage = new google_protobuf_empty_pb.Empty;
   }

   authenticate( metadata: grpc.Metadata ): Promise <string>{
    return new Promise((resolve, reject) =>{

      this.client.authenticate(this.requestMessage, metadata, (err, response:any) => {

        if (err) {
          return reject(err);;
        }
        //console.log(response?.getAuthjwt());
        resolve(response.toObject().authjwt);
       // console.log('Print Service: '+ response.toObject().authjwt);
      });
    });

  }
}
