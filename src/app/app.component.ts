import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  user = {
    name: 'haha',
    age: '19',
  };
  twoWayDataBinding = 'hieuldhe150703';

  //DATA BINDING//
  // proproty binding
  inputType: 'text';
  inputValue: 'data binding';
  // event binding
  handler(event) {
    console.log(event);
  }
}
