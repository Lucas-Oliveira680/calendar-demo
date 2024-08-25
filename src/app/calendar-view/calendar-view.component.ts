import { Component } from '@angular/core';
import {CalendarComponent} from "./components/calendar/calendar.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";


@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [
    SidebarComponent,
    CalendarComponent
  ],
  templateUrl: './calendar-view.component.html',
  styleUrl: './calendar-view.component.scss'
})
export class CalendarViewComponent {

}