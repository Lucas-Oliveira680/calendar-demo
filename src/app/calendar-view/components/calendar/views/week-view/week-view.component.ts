import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {DateControlsService} from "../../../../services/date-controls.service";

@Component({
    selector: 'app-week-view',
    standalone: true,
    imports: [
        NgForOf
    ],
    templateUrl: './week-view.component.html',
    styleUrl: './week-view.component.scss'
})
export class WeekViewComponent {
    days = new Array(7).fill(null);
    timeSlots = new Array(24).fill(null);

    constructor(private _dateControlsService: DateControlsService) {
    }

    getWeekDay(index: number) {
        let weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
        return weekDays[index];
    }

    get currentDate() {
        return this._dateControlsService.selectedDate.value;
    }
}