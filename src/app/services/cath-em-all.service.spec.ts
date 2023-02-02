import { TestBed } from '@angular/core/testing';

import { CathEmAllService } from './cath-em-all.service';

describe('CathEmAllService', () => {
  let service: CathEmAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CathEmAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
