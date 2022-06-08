import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { ADVICES } from '../mock-data/list-advices-mock';
import { NEWS } from '../mock-data/list-news-mock';

@Injectable({
  providedIn: 'root'
})
export class AdvicesService {
  advices = ADVICES;
  news = NEWS;

  constructor() { }

  getCurrentAdvice(id: number): any {
    return of(this.advices.find((el) => el.id == id)).pipe(delay(0));
  }

  getCurrentNew(id: number): any {
    return of(this.news.find((el) => el.id == id)).pipe(delay(0));
  }
}

