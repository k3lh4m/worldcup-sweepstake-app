import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweepstakeWrapperComponent } from './sweepstake-wrapper.component';

describe('SweepstakeWrapperComponent', () => {
  let component: SweepstakeWrapperComponent;
  let fixture: ComponentFixture<SweepstakeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweepstakeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweepstakeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
