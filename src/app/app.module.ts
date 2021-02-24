
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
// import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
// import { FilterPipe } from './@theme/pipes';


const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbEvaIconsModule,
    // FilterPipe
  //   NbAuthModule.forRoot({
  //     strategies: [
  //       NbPasswordAuthStrategy.setup({
  //         name: 'email',
  //         baseEndpoint: 'http://example.com/app-api/v1',
  // login: {
  //   endpoint: '/auth/sign-in',
  // },
  // register: {
  //   endpoint: '/auth/sign-up',
  // },
  // logout: {
  //   endpoint: '/auth/sign-out',
  // },
  // requestPass: {
  //   endpoint: '/auth/request-pass',
  // },
  // resetPass: {
  //   endpoint: '/auth/reset-pass',
  // },
  //       }),
  //     ],
  //     forms: {
  //       login: formSetting,
  //          register: formSetting,
  //          requestPassword: formSetting,
  //          resetPassword: formSetting,
  //          logout: {
  //            redirectDelay: 0,
  //          },
  //     },
  //   }),

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
