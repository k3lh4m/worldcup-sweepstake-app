import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableNamesComponent } from './editable-names.component';

describe('EditableNamesComponent', () => {
  let component: EditableNamesComponent;
  let fixture: ComponentFixture<EditableNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
