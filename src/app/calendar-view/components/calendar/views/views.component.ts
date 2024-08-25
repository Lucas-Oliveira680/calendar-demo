import {Component} from '@angular/core';
import {WeekViewComponent} from "./week-view/week-view.component";
import {TimeNeedleComponent} from "../time-needle/time-needle.component";

@Component({
    selector: 'app-views',
    standalone: true,
    imports: [
        WeekViewComponent,
        TimeNeedleComponent
    ],
    templateUrl: './views.component.html',
    styleUrl: './views.component.scss'
})
export class ViewsComponent {

}