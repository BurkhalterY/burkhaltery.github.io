import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersoRoutingModule } from './perso-routing.module';

import { CollectionComponent } from './components/collection/collection.component';
import { CubingComponent } from './components/cubing/cubing.component';
import { LangComponent } from './components/lang/lang.component';
import { YannisComponent } from './components/yannis/yannis.component';


@NgModule({
  declarations: [
    CollectionComponent,
    CubingComponent,
    LangComponent,
    YannisComponent,
  ],
  imports: [
    CommonModule,
    PersoRoutingModule,
  ],
})
export class PersoModule { }
