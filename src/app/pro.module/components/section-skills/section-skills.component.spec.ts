import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionSkillsComponent } from './section-skills.component';

describe('SectionSkillsComponent', () => {
  let component: SectionSkillsComponent;
  let fixture: ComponentFixture<SectionSkillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
