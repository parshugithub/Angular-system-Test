import { Component } from '@angular/core';
declare var NgForm:any;

import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interviewAngular';
  // user = new User();
  userModal = new User();

  // register(){
  //   console.log("this is object customer",this.user);

  // }
   


  constructor() { }

  onSubmit() {
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.log(this.userModal);
  }
}
