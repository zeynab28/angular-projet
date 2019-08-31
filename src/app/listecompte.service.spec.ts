import { TestBed } from '@angular/core/testing';

import { ListecompteService } from './listecompte.service';

describe('ListecompteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListecompteService = TestBed.get(ListecompteService);
    expect(service).toBeTruthy();
  });
});
