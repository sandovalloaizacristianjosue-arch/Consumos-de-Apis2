import { TestBed } from '@angular/core/testing';

import { Transporte } from './transporte';

describe('Transporte', () => {
  let service: Transporte;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Transporte);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
