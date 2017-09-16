import { TestBed, inject } from '@angular/core/testing';

import { PjddataService } from './pjddata.service';

describe('PjddataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PjddataService]
    });
  });

  it('should ...', inject([PjddataService], (service: PjddataService) => {
    expect(service).toBeTruthy();
  }));
});
