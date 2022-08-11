import { TestBed } from '@angular/core/testing';

import { ApitTodoService } from './apit-todo.service';

describe('ApitTodoService', () => {
  let service: ApitTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApitTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
