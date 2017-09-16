// Integrate system Components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { customHttpProvider } from './_helpers/index';
import { AppRoutingModule } from './app-routing.module';

// Integrate App Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/index';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, PjddataService } from './_services/index';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
  ],
  providers: [
        customHttpProvider,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        PjddataService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
