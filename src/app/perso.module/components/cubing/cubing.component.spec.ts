import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CubingComponent } from './cubing.component';

describe('CubingComponent', () => {
  let component: CubingComponent;
  let fixture: ComponentFixture<CubingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CubingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
