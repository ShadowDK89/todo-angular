import { TestBed } from '@angular/core/testing';

import { HandleTodoService } from './handle-todo.service';

describe('HandleTodoService', () => {
  let service: HandleTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should sort list', () => {
    expect(service.sortList).toBeTruthy();

    service.sortList(2)

    expect(service.sortList).toEqual(2);
  })
});
