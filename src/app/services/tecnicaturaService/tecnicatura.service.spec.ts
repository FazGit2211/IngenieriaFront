import { TestBed } from '@angular/core/testing';

import { TecnicaturaService } from './tecnicatura.service';

describe('TecnicaturaService', () => {
  let service: TecnicaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnicaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
