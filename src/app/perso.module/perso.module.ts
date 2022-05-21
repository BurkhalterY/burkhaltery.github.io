import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersoRoutingModule } from './perso-routing.module';

import { BaseComponent } from './components/base/base.component';
import { MenuComponent } from './components/menu/menu.component';
import { MeComponent } from './components/me/me.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CubingComponent } from './components/cubing/cubing.component';
import { SocialsComponent } from './components/socials/socials.component';


@NgModule({
  declarations: [
    BaseComponent,
    MenuComponent,
    MeComponent,
    CollectionComponent,
    CubingComponent,
    SocialsComponent,
  ],
  imports: [
    CommonModule,
    PersoRoutingModule,
  ],
})
export class PersoModule { }
