/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HackernewsService } from './hackernews.service';

describe('HackernewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackernewsService]
    });
  });

  it('should ...', inject([HackernewsService], (service: HackernewsService) => {
    expect(service).toBeTruthy();
  }));
});
