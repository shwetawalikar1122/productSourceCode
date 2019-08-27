import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReactiveTaskComponent } from './display-reactive-task.component';

describe('DisplayReactiveTaskComponent', () => {
  let component: DisplayReactiveTaskComponent;
  let fixture: ComponentFixture<DisplayReactiveTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayReactiveTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReactiveTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
