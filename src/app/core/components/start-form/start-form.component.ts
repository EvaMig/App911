import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.scss']
})
export class StartFormComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  navigateToHome(): void {
    this._route.navigate(['home']);
  }
}
