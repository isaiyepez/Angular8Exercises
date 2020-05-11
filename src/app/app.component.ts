import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StructuralDirectives';

  public colors = ["red", "blue", "green", "yellow"];

  public name = "Isai YEPEZ";

  public message = "An example message";

  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();

}
