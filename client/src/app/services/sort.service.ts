import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {


  feedSort = new BehaviorSubject("New");

  constructor() { }

  setFeedSort(sort: string) {
    this.feedSort.next(sort);
  }

  getFeedSort() {
    return this.feedSort;
  }
  currentSort$ = this.feedSort.asObservable();
}
