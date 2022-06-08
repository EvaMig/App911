import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADVICES } from '../../mock-data/list-advices-mock';

@Component({
  selector: 'app-advices-shell',
  templateUrl: './advices-shell.component.html',
  styleUrls: ['./advices-shell.component.scss']
})
export class AdvicesShellComponent implements OnInit {
  
  advicesList = ADVICES.slice(0, 3);
  
  constructor(private _route: Router) { }
  // private router: Router,

  ngOnInit(): void {
  }

  navigateToAdvices(): void {
    this._route.navigate(['home/advices']);
  }

  // goToAllAdvices(event: any): void {
  //   console.log(event);
  //   this.router.navigate(['home/advice']);
  // }
}
