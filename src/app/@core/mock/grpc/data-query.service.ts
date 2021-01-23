import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { DataQueryClient } from 'app/@protos/sense_api_dataquery_pb_service';
import { AccessPointsReplyMsg } from 'app/@protos/sense_core_datamodel_pb';
import { APQuery } from 'app/@protos/sense_core_datarequest_pb';


@Injectable({
  providedIn: 'root'
})
export class DataQueryService {

  client: DataQueryClient;
  requestMessage: APQuery;

  constructor() {
    this.client = new DataQueryClient('http://84.209.75.2:8000');

    this.requestMessage = new APQuery ();
   }

   getAP(metadata: grpc.Metadata) : Promise <AccessPointsReplyMsg>{
     return new Promise(async (resolve, reject) =>{

      const stream = this.client.fetchAPItems(this.requestMessage, metadata);
      stream.on('data', (replyMessage : AccessPointsReplyMsg) => {
        console.log(`(${replyMessage.getSsid()})`);
        console.log(replyMessage);
        
        
      });
        stream.on('end',function(){
        console.log(resolve);
      });
      stream.on('status',function(){
        console.log(reject);
      });
     });

   }
}