import { distanceInWordsToNow, subDays } from 'date-fns'
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeAgo'
})
export class TimaAgoPipe implements PipeTransform {
    transform(date) {
        return date = distanceInWordsToNow(subDays(date, 0), { addSuffix: true })
    }

}