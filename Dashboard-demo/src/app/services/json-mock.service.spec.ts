import { TestBed } from '@angular/core/testing';

import { JsonMockService } from './json-mock.service';

describe('JsonMockService', () => {
  let service: JsonMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
