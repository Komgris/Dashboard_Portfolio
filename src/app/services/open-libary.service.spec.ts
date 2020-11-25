import { TestBed } from '@angular/core/testing';

import { OpenLibaryService } from './open-libary.service';

describe('OpenLibaryService', () => {
  let service: OpenLibaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenLibaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
