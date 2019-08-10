import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  title = new BehaviorSubject("ARK");

  constructor() { }

  setTitle(title: string) {
    this.title.next(title);
  }

  getTitle() {
    return this.title;
  }
  currentTitle$ = this.title.asObservable();
}
