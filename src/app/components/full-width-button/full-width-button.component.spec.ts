import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidthButtonComponent } from './full-width-button.component';

describe('FullWidthButtonComponent', () => {
  let component: FullWidthButtonComponent;
  let fixture: ComponentFixture<FullWidthButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullWidthButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
