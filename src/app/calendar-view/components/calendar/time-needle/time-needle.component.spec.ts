import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeNeedleComponent } from './time-needle.component';

describe('TimeNeedleComponent', () => {
  let component: TimeNeedleComponent;
  let fixture: ComponentFixture<TimeNeedleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeNeedleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeNeedleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
