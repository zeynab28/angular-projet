import { TestBed } from '@angular/core/testing';

import { ListedepotService } from './listedepot.service';

describe('ListedepotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListedepotService = TestBed.get(ListedepotService);
    expect(service).toBeTruthy();
  });
});
