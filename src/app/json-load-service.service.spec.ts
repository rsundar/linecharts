import { TestBed } from '@angular/core/testing';

import { JsonLoadServiceService } from './json-load-service.service';

describe('JsonLoadServiceService', () => {
  let service: JsonLoadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonLoadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
