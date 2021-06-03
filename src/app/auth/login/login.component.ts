import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent } from '@nebular/auth';
import { AuthService } from 'app/@core/mock/grpc/back/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  successMessage = '';

  jwToken = '';
  userId = '';
  success : boolean;

  constructor( authServices: NbAuthService, protected router: Router, private authService: AuthService){//, private tokenStorage: TokenStorageService

    super(authServices, {}, null, router);

    // they work because the clas extends from a mother class
    this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
    this.showMessages = this.getConfigValue('forms.login.showMessages');
    this.strategy = this.getConfigValue('forms.login.strategy');
    this.rememberMe = this.getConfigValue('forms.login.rememberMe');
  }



  onSubmit(): void {

    this.logina(this.user.email, this.user.password).subscribe(
      data => {

        this.success = true;

        this.successMessage = 'Authentication Successful';


        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.jwToken = data.token;
        this.userId = data.userId;

        this.reloadPage( this.jwToken );

      },
      err => {

        this.success = false;
        this.errorMessage = err.error.error;
        this.isLoginFailed = true;

      }
    );
    this.submitted = true;
  }

  logina(email , pass): any{
    return this.authService.login(email, pass);
  }

  reloadPage(jwToken : any): void {

    console.log(jwToken);

    localStorage.setItem('access_token', jwToken);

    this.router.navigate(['main-dashboard']);


  }

  ngOnInit(){


  }


  onClose(){
    this.submitted = false;
    this.errorMessage = '';
  }


}