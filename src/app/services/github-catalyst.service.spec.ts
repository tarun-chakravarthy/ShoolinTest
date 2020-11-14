import { TestBed } from '@angular/core/testing';

import { GithubCatalystService } from './github-catalyst.service';

describe('GithubCatalystService', () => {
  let service: GithubCatalystService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubCatalystService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
