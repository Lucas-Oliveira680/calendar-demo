import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DateControlsService {

    selectedDate = new BehaviorSubject(new Date());

    constructor() {
    }
}