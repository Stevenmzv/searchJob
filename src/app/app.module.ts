import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewJobsComponent } from './components/view-jobs/view-jobs.component';
import { SaveComponent } from './components/save/save.component';

import { AppRoutingModule } from './app.routing.module';
import { ServicioService } from './servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewJobsComponent,
    SaveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
