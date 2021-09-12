import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CubingComponent } from './components/cubing/cubing.component';
import { LangComponent } from './components/lang/lang.component';
import { YannisComponent } from './components/yannis/yannis.component';

const routes: Routes = [
  {
    path: 'yannis',
    component: BaseComponent,
    children: [
      { path: '', component: YannisComponent },
      { path: 'collection', component: CollectionComponent },
      { path: 'cubing', component: CubingComponent },
      { path: 'lang', component: LangComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class PersoRoutingModule { }
