import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDeepFromObject, NbAuthService, NbRegisterComponent } from '@nebular/auth';
import { AuthService } from 'app/@core/mock/grpc/back/auth.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class NgxRegisterComponent extends NbRegisterComponent implements OnInit {

  redirectDelay: number = 0;
  showMessages: any
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  isLoggedIn = false;
  isSignupFailed = false;
  success : boolean = false;
  errorMessage = '';
  successMessage = '';

  constructor( authServices: NbAuthService, protected router: Router, private authService: AuthService ) {
    super(authServices, {}, null, router);

  }

  ngOnInit(): void {
  }

  register(): void {
    // this.errors = this.messages = [];

    this.signup(this.user.email, this.user.password).subscribe(
      data => {

        console.log(data);

        this.success = true;

        this.successMessage = 'Registration Successful';

        this.router.navigate(['auth/login']);

      },
      err => {

        this.success = false;
        this.errorMessage = err.error.error.message;

        this.isSignupFailed = true;

      }
    );
    this.submitted = true;

  }

  signup(email , pass): any{
    return this.authService.register(email, pass);
  }

  onClose(){
    this.submitted = false;
    this.errorMessage = '';
  }

}
