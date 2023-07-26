import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  private _value = new BehaviorSubject('');

  updateValue(value: string) {
    this._value.next(value);
  }

  get value() {
    return this._value.asObservable();
  }
}
