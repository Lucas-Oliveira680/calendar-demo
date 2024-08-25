import { TestBed } from '@angular/core/testing';

import { DateControlsService } from './date-controls.service';

describe('DateControlsService', () => {
  let service: DateControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
