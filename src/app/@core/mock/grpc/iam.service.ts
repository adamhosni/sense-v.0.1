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


    this.requestMessage = new google_protobuf_empty_pb.Empty;
   }

   authenticate( metadata: grpc.Metadata, ip: string ): Promise <string>{
    this.client = new IAMServiceClient('http://' + ip + ':8000');

    return new Promise((resolve, reject) =>{

      this.client.authenticate(this.requestMessage, metadata, (err, response:any) => {

        if (err) {
          // console.log(err);

          return reject(err);
        }else

        resolve(response.toObject().authjwt);
      });
    });

  }
}
