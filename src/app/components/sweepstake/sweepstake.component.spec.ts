import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweepstakeComponent } from './sweepstake.component';

describe('SweepstakeComponent', () => {
  let component: SweepstakeComponent;
  let fixture: ComponentFixture<SweepstakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweepstakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweepstakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
