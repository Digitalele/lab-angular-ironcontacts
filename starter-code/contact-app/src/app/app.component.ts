import { Component, Input } from '@angular/core';
import Contacts from './contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  contacts = Contacts;
}
