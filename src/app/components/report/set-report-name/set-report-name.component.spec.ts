import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetReportNameComponent } from './set-report-name.component';

describe('SetReportNameComponent', () => {
  let component: SetReportNameComponent;
  let fixture: ComponentFixture<SetReportNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetReportNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetReportNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
