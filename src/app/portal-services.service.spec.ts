import { TestBed } from '@angular/core/testing';

import { PortalServicesService } from './portal-services.service';

describe('PortalServicesService', () => {
  let service: PortalServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
