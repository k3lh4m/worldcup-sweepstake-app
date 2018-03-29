import { TestBed, inject } from '@angular/core/testing';

import { SetSecondaryBarMessageService } from './set-secondary-bar-message.service';

describe('SetSecondaryBarMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetSecondaryBarMessageService]
    });
  });

  it('should be created', inject([SetSecondaryBarMessageService], (service: SetSecondaryBarMessageService) => {
    expect(service).toBeTruthy();
  }));
});
