import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //THIS IS USED AS: import { AppComponent } from './app.component';
  title = 'Angular9Learn';
  author = "Mintu Choudhary"
  arrayData = [10, 20, 30, 40]
  showMe = true //for if block
  //for switch statement
  color="green"
  fruits =['apple','banana','pineapple','grapes']

  stud={
    name : "Mintu",
    email : "mintuchoudhary01@gmail.com"
  }
  testFunction() {
    alert("Hi you clicked on CLICK ME..")
  }

  getValue(n1) {
    alert(n1.value)
  }
  onSubmit(formdata) {
    alert(formdata.nm)
  }
}
