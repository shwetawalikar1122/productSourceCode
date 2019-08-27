import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserGuardService } from './user-guard.service';
import { AppCustomPreloader } from './appcustompreloader';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { TaskformComponent } from './taskdisplay/taskform/taskform.component';
import { DisplayReactiveTaskComponent } from './taskdisplay/display-reactive-task/display-reactive-task.component';
import { EditReactiveTaskComponent } from './taskdisplay/edit-reactive-task/edit-reactive-task.component';

const arr: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'customer', data: { preload: true}, loadChildren: './customer/customer.module#CustomerModule'},
  {path: 'user1', loadChildren: './users/users.module#UsersModule'},
  {path: 'product', canLoad: [UserGuardService] , loadChildren: './productdisplay/product.module#ProductModule'},
  {path: 'pagenotfound', component: PagenotfoundComponent},
  {path: 'taskform', component: TaskformComponent},
  {path: 'tasks', component: TaskdisplayComponent},
  {path: 'displaytask', component: DisplayReactiveTaskComponent},
  {path: 'editreactivetask/:Id', component: EditReactiveTaskComponent},
   {path: '**', redirectTo: '/pagenotfound'}
];

export const routing = RouterModule.forRoot(arr, {preloadingStrategy : AppCustomPreloader});
