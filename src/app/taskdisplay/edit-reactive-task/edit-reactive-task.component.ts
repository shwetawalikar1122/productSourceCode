import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskdataService } from '../taskdata.service';
import { Task } from '../task';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-reactive-task',
  templateUrl: './edit-reactive-task.component.html',
  styleUrls: ['./edit-reactive-task.component.css']
})
export class EditReactiveTaskComponent implements OnInit {
  id: number;
  displayTask: Task;
  task: FormGroup;



  constructor(
    private _actroute: ActivatedRoute,
    private _taskdata: TaskdataService,
    private fb: FormBuilder,
    private _router: Router) { }

  ngOnInit() {
    this.id = this._actroute.snapshot.params.Id;
    this._taskdata.getTaskById(this.id).subscribe((data: Task[]) => {
      this.displayTask = data[0];
      this.task.patchValue({
        Id: this.displayTask.Id,
        Title: this.displayTask.Title,
        Status: this.displayTask.Status,
             });
    });
    this.task = this.fb.group({
      Id: new FormControl(null, [ Validators.required]),
      Title: new FormControl(null, [ Validators.required]),
      Status: new FormControl (null)
    });

  }
  onUserEditReactive() {
    this._taskdata
      .editTask(
        new Task(
          this.task.value.Id,
          this.task.value.Title,
          this.task.value.Status
        )
      )
      .subscribe(
        (data: any) => {
          this._router.navigate(['/tasks']);
        }
      );
  }

}
