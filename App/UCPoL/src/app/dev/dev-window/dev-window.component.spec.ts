import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevWindowComponent } from './dev-window.component';

describe('DevWindowComponent', () => {
  let component: DevWindowComponent;
  let fixture: ComponentFixture<DevWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
