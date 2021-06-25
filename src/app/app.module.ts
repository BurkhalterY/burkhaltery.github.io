import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SectionPresentationComponent } from './components/section-presentation/section-presentation.component';
import { SectionSkillsComponent } from './components/section-skills/section-skills.component';
import { SectionCareerComponent } from './components/section-career/section-career.component';
import { SectionProjectsComponent } from './components/section-projects/section-projects.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SectionPresentationComponent,
    SectionSkillsComponent,
    SectionCareerComponent,
    SectionProjectsComponent,
    ProjectComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
