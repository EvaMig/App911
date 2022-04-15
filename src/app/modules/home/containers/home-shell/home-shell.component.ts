import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-shell',
  templateUrl: './home-shell.component.html',
  styleUrls: ['./home-shell.component.scss']
})
export class HomeShellComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  navigateToSettings(): void {
    this._route.navigate(['settings']);
  }
}
