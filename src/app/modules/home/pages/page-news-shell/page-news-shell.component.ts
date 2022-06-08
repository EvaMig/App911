import { Component, OnInit } from '@angular/core';
import { NEWS } from '../../mock-data/list-news-mock';

@Component({
  selector: 'app-page-news-shell',
  templateUrl: './page-news-shell.component.html',
  styleUrls: ['./page-news-shell.component.scss']
})
export class PageNewsShellComponent implements OnInit {
  newsAllList = NEWS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
