import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskInfoComponent } from './update-task-info.component';

describe('UpdateTaskInfoComponent', () => {
  let component: UpdateTaskInfoComponent;
  let fixture: ComponentFixture<UpdateTaskInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTaskInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
