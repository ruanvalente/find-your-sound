import { TestBed } from '@angular/core/testing';

import { ToastNotifyService } from './toast-notify.service';

describe('ToastNotifyService', () => {
  let service: ToastNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
