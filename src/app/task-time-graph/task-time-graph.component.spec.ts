import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTimeGraphComponent } from './task-time-graph.component';

describe('TaskTimeGraphComponent', () => {
  let component: TaskTimeGraphComponent;
  let fixture: ComponentFixture<TaskTimeGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTimeGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTimeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
