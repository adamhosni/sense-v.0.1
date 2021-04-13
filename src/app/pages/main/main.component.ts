import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { grpc } from '@improbable-eng/grpc-web';
import { BackDevicesService } from 'app/@core/mock/grpc/back/back-devices.service';

@Component({
  selector: 'ngx-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  sub;
  // jwToken = '';d

  constructor(private backDevService: BackDevicesService, private activatedroute : ActivatedRoute,
    private router: Router){


      // this.jwToken = this.router.getCurrentNavigation().extras.state.example;
      // if (this.jwToken == undefined) this.jwToken = '';

    // console.log(this.activatedroute.snapshot.params.jwToken);

  }

  ngOnInit(){

    let jwToken = this.activatedroute.snapshot.paramMap.get("token");
    console.log(jwToken);

    // this.getAllDevices(jwToken);

    // this.sub=this.activatedroute.paramMap.subscribe(params => {
    //   console.log(params);

    //   // this.jwToken=params;
    // });

    // console.log(this.jwToken);

  }
  getAllDevices(bearer: String){

    // const auth = new grpc.Metadata();
      // auth.headersMap ["Authorization"] = ['Bearer '+''];
      this.backDevService.getAllDevices(bearer);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
