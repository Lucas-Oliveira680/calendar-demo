import {Component, OnDestroy, OnInit} from '@angular/core';
import {DateControlsService} from "../../../services/date-controls.service";

@Component({
    selector: 'app-time-needle',
    standalone: true,
    imports: [],
    templateUrl: './time-needle.component.html',
    styleUrl: './time-needle.component.scss'
})
export class TimeNeedleComponent implements OnInit, OnDestroy {
    constructor(private _dateControlsService: DateControlsService) {

    }

    currentTime: Date = new Date();
    position: number = 0;
    intervalId: any;

    ngOnInit(): void {
        this.updateTimeNeedlePosition();
        this.intervalId = setInterval(() => {
            this.updateTimeNeedlePosition();
        }, 60000); // Update every minute
    }

    ngOnDestroy(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    updateTimeNeedlePosition(): void {
        this.currentTime = new Date();
        this.position = this.calculatePosition(this.currentTime);
    }

    calculatePosition(time: Date): number {
        const hours = time.getHours() + 1;
        const minutes = time.getMinutes();

        // Assuming each hour takes 50px in height and each minute takes 1.67px
        return (hours * 51) + (minutes * 0.835);
    }


    get currentHourAndMinute() {
        const hours = this.currentTime.getHours().toString().padStart(2, '0');
        const minutes = this.currentTime.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
}