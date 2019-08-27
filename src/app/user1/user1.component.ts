import { Component, OnInit } from '@angular/core';
import { User, UserResolved  } from '../userdisplay/user';
import { UserdataService } from '../userdisplay/userdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
  userArr: User[] = [];
  userData: UserResolved;
  ErrorMessage: string;

constructor(private _actroute: ActivatedRoute,private _userdata:UserdataService) {
  this.userData = this._actroute.snapshot.data['uData'];
}

  ngOnInit() {
 this.userArr = this.userData.data;
 this.ErrorMessage = this.userData.errorMessage;
}
}
