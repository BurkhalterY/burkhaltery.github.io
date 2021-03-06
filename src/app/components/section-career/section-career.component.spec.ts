import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCareerComponent } from './section-career.component';

describe('SectionCareerComponent', () => {
  let component: SectionCareerComponent;
  let fixture: ComponentFixture<SectionCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
