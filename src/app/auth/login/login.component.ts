import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent } from '@nebular/auth';
import { User } from 'app/@core/data/user';
import { AuthService } from 'app/@core/mock/grpc/back/auth.service';
// import { AuthService } from 'app/@core/mock/grpc/back/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  jwToken = '';
  userId = '';

  // redirectDelay: number = 0;
  // showMessages: any = {};
  // strategy: string = '';
  // errors: string[] = [];
  // messages: string[] = [];
  // user: User = {email: '', password: ''};
// user: any = {};
  // submitted: boolean = false;
  // rememberMe = false;

  constructor( authServices: NbAuthService, router: Router, private authService: AuthService){//, private tokenStorage: TokenStorageService

    super(authServices, {}, null, router);

    // they work because the clas extends from a mother class
    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.strategy = this.getConfigValue('forms.login.strategy');
    this.rememberMe = this.getConfigValue('forms.login.rememberMe');
  }



  onSubmit(): void {

    this.submitted = true;

    this.logina(this.user.email, this.user.password).subscribe(
      data => {

        console.log(data);

        this.errorMessage = 'Authentication Successful';

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.jwToken = data.token;
        this.userId = data.userId;

        this.reloadPage(this.jwToken );

      },
      err => {

        this.errorMessage = err.error.error;
        this.isLoginFailed = true;
        console.log(this.errorMessage);

      }
    );
  }

  logina(email , pass): any{
    return this.authService.login(email, pass);
  }

  reloadPage(jwToken : any): void {
    // var token = jwToken;
    console.log(jwToken);

    // window.location.reload();
    this.router.navigate(['main-dashboard', jwToken]).then( (e) => {
      if (e) {
        console.log("Navigation Successful");
      } else {
        console.log("Navigation has failed!");
      }
    });//{ state: { example: this.jwToken } }
  }

  ngOnInit(){


  }


  onClose(){
    this.submitted = false;
  }


}