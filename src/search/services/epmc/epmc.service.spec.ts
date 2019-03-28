import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EpmcService } from './epmc.service';

describe('EpmcService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: EpmcService = TestBed.get(EpmcService);
    expect(service).toBeTruthy();
  });
});
