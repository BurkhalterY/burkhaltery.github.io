import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProModule } from './pro.module/pro.module';
import { PersoModule } from './perso.module/perso.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PersoModule,
    ProModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
