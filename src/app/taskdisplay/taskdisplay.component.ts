import { Component, OnInit } from '@angular/core';
import { TaskdataService } from './taskdata.service';
import { Task } from './task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {
  arr: Task[] = [];

  constructor(private _data: TaskdataService, private _router: Router) { }

  ngOnInit() {
    this._data.getAllTasks().subscribe(
      (data: Task[]) => {
        this.arr = data;
  }
    );
}
onTaskDelete(item: Task) {
  this._data.deleteTask(item.Id).subscribe(
    (data: any) => {
      this.arr.splice(this.arr.indexOf(item), 1);
      alert('Task deleted');
    }
  );
}
onEditTask(item: Task) {

  this._router.navigate(['/edittask', item.Id]);
}
onUserEditReactive(item: Task)   {
  this._router.navigate(['/editreactivetask', item.Id]);
}

onsearch(value) {

  if (value != "") {

    this.arr = this.arr.filter(x => x.Id.indexOf(value) != -1);

  } else {

    this._data.getAllTasks().subscribe(

      (data: Task[]) => {

        this.arr = data;

      },

      function(error) {

        alert(error);

      },

      function() {}

    );

  }
}
}
