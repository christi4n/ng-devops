import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {
  counter = 'home';
  count: BehaviorSubject<string>;

  constructor() {
    this.count = new BehaviorSubject(this.counter);
  }

  nextCount(value) {
    this.count.next(value);
  }
}
