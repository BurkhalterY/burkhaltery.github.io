import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { MeComponent } from './components/me/me.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CubingComponent } from './components/cubing/cubing.component';
import { SocialsComponent } from './components/socials/socials.component';

const routes: Routes = [
  {
    path: 'aestetica',
    component: BaseComponent,
    children: [
      { path: '', component: MeComponent },
      { path: 'collection', component: CollectionComponent },
      { path: 'cubing', component: CubingComponent },
      { path: 'socials', component: SocialsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class PersoRoutingModule { }
