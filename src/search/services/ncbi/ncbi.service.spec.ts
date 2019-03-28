import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NcbiService } from './ncbi.service';

describe('NcbiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: NcbiService = TestBed.get(NcbiService);
    expect(service).toBeTruthy();
  });
});
