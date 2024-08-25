import { Component } from '@angular/core';
import {ViewsComponent} from "./views/views.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    ViewsComponent,
    HeaderComponent
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

}