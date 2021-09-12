import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { YannisComponent } from './yannis.component';

describe('YannisComponent', () => {
  let component: YannisComponent;
  let fixture: ComponentFixture<YannisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ YannisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YannisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
