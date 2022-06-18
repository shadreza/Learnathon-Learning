import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponentComponent } from './components/register-user-component/register-user-component.component';
import { LoginUserComponentComponent } from './components/login-user-component/login-user-component.component';

// primeng modules start
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
// primeng modules end

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponentComponent,
    LoginUserComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule,
    ToastModule,
    RippleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
