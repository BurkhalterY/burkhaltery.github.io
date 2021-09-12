import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionPresentationComponent } from './section-presentation.component';

describe('SectionPresentationComponent', () => {
  let component: SectionPresentationComponent;
  let fixture: ComponentFixture<SectionPresentationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
