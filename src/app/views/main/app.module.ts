import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from '../events/events.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { FormLoginModalComponent } from '../../components/formLoginModal/form-login.modal.component';


const imports = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatDialogModule,
  MatFormFieldModule,
]

const components = [
  AppComponent,
  EventsComponent,
  MenuComponent,
  FormLoginModalComponent
]

const bootstrap = [
  AppComponent
]

@NgModule({
  declarations: components,
  imports: imports,
  bootstrap: bootstrap,
})
export class AppModule { }
