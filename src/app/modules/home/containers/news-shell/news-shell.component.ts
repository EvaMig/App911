import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NEWS } from '../../mock-data/list-news-mock';

@Component({
  selector: 'app-news-shell',
  templateUrl: './news-shell.component.html',
  styleUrls: ['./news-shell.component.scss']
})
export class NewsShellComponent implements OnInit {

  // newsList = NEWS.slice(0, 3);
  newsList = [];
  index: number = 0;
  constructor(private _route: Router) { }

  ngOnInit(): void {
    this.newsList = [NEWS[this.index], NEWS[this.index+1], NEWS[this.index+2]]
  }

  navigateToNews(): void {
    this._route.navigate(['home/news']);
  }

  goToPrev(): void {
    this.newsList = [];
    if(this.index === 0) {
      this.index = NEWS.length - 1;
      this.newsList.push(NEWS[this.index]);
      this.newsList.push(NEWS[0]);
      this.newsList.push(NEWS[1]);
    } else if (this.index === NEWS.length - 1) {
      this.index = NEWS.length - 2;
      this.newsList.push(NEWS[this.index]);
      this.newsList.push(NEWS[NEWS.length - 1]);
      this.newsList.push(NEWS[0]);
    } else if (this.index === NEWS.length - 2) {
      this.index = NEWS.length - 3;
      this.newsList.push(NEWS[this.index]);
      this.newsList.push(NEWS[NEWS.length - 2]);
      this.newsList.push(NEWS[NEWS.length - 1]);
    } else {
      this.index -= 1;
      this.newsList.push(NEWS[this.index]);
      this.newsList.push(NEWS[this.index + 1]);
      this.newsList.push(NEWS[this.index + 2]);
    }

  }

  goToNext(): void {
    this.newsList = [];
    if(this.index + 2 === NEWS.length - 1) {
      this.index += 1;
      this.newsList.push(NEWS[this.index]);
      this.newsList.push(NEWS[this.index + 1]);
      this.newsList.push(NEWS[0]);
    } else if (this.index + 1 === NEWS.length - 1) {
      this.index += 1;
      this.newsList.push(NEWS[this.index]);
      this.newsList.push(NEWS[0]);
      this.newsList.push(NEWS[1]);
    } else if (this.index === NEWS.length - 1) {
      this.index = 0;
      this.newsList.push(NEWS[this.index]);
      this.newsList.push(NEWS[this.index + 1]);
      this.newsList.push(NEWS[this.index + 2]);
    } else {
      this.index += 1;
      this.newsList.push(NEWS[this.index]);
      this.newsList.push(NEWS[this.index + 1]);
      this.newsList.push(NEWS[this.index + 2]);
    }
  }

}
