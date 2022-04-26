import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { ADVICES } from '../mock-data/list-advices-mock';

@Injectable({
  providedIn: 'root'
})
export class AdvicesService {
  advices = ADVICES;

  constructor() { }

  getCurrentAdvice(id: number): any {
    return of(this.advices.find((el) => el.id == id)).pipe(delay(0));
  }
}