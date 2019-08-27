import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Task } from '../task';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-display-reactive-task',
  templateUrl: './display-reactive-task.component.html',
  styleUrls: ['./display-reactive-task.component.css']
})
export class DisplayReactiveTaskComponent implements OnInit {
task;
  constructor( private fb: FormBuilder, private _data: TaskdataService) { }

  ngOnInit() {
    this.task = this.fb.group({
      Id: new FormControl(null, [ Validators.required]),
      Title: new FormControl(null, [ Validators.required]),
      Status: new FormControl (null)
    });
  }
  OnSubmit() {
    this._data .addTask(new Task(
          this.task.value.Id,
          this.task.value.Title,
          this.task.value.Status,
       )
      )
      .subscribe((x: any) => {
        alert('record added');
      });
  }
}
