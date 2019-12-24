import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MDateTimePickerComponent } from './m-date-time-picker.component';

describe('MDateTimePickerComponent', () => {
  let component: MDateTimePickerComponent;
  let fixture: ComponentFixture<MDateTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MDateTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
