import { Component, OnInit } from '@angular/core';
import { NEWS } from '../../mock-data/list-news-mock';

@Component({
  selector: 'app-news-shell',
  templateUrl: './news-shell.component.html',
  styleUrls: ['./news-shell.component.scss']
})
export class NewsShellComponent implements OnInit {

  newsList = NEWS;
  constructor() { }

  ngOnInit(): void {
  }

}
