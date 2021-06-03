// import { Injectable } from '@angular/core';
// import { grpc } from '@improbable-eng/grpc-web';
// import { TargetListRequest, TargetListResponse } from 'app/@protos/sense_core_mac_pb';
// import { TargetListQueryServiceClient } from 'app/@protos/sense_core_mac_pb_service';

// @Injectable({
//   providedIn: 'root'
// })
// export class TargetListQService {

//   client: TargetListQueryServiceClient;
//   targetListReq: TargetListRequest;

//   constructor() {
//     this.client = new TargetListQueryServiceClient('http://84.209.75.2:8000');
//     this.targetListReq = new TargetListRequest();
//     this.targetListReq.setTypemac(0);


//   }

//   targetFullReadQuery(metadata: grpc.Metadata) : Promise <TargetListResponse>{

//     return new Promise((resolve, reject) =>{
//       this.client.targetFullReadQuery(this.targetListReq, metadata, (err, response:any) => {

//         if (err) {
//           return reject(err);;
//         }
//         console.log(response.toObject());

//         resolve(response.toObject());
//         // console.log(response.toObject());
//         // She mentioned that her heart got broken the night of habibi when I was down! Why did she mention it?
//         // It is never clear the picture with her! Maybe I am just not so important for her. Just a friend that looks after her.

//         //
//     });
//    });

// }
// }
