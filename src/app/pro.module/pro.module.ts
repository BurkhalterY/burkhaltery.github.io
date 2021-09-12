import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProRoutingModule } from './pro-routing.module';

import { MenuComponent } from './components/menu/menu.component';
import { BaseComponent } from './components/base/base.component';
import { SectionPresentationComponent } from './components/section-presentation/section-presentation.component';
import { SectionSkillsComponent } from './components/section-skills/section-skills.component';
import { SectionCareerComponent } from './components/section-career/section-career.component';
import { SectionProjectsComponent } from './components/section-projects/section-projects.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    MenuComponent,
    SectionPresentationComponent,
    SectionSkillsComponent,
    SectionCareerComponent,
    SectionProjectsComponent,
    ProjectComponent,
    FooterComponent,
    BaseComponent,
  ],
  imports: [
    CommonModule,
    ProRoutingModule,
  ]
})
export class ProModule { }
