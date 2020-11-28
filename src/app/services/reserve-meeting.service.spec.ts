import { TestBed } from '@angular/core/testing';

import { ReserveMeetingService } from './reserve-meeting.service';

describe('ReserveMeetingService', () => {
  let service: ReserveMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
