import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../../shared/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _route: Router, private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
  }

  navigateToSettings(): void {
    this._route.navigate(['settings']); 
  }

  navigateToExit(): void {
    this.authorizationService.removeCurrentUser();
    this._route.navigate(['login']); 
  }

  navigateToAboutUs(): void {
    this._route.navigate(['home/about-us']);
  }

  navigateToNews(): void {
    this._route.navigate(['home/news']);
  }

  navigateToAdvices(): void {
    this._route.navigate(['home/advices']);
  }

  navigateToHome(): void {
    this._route.navigate(['home']);
  }

  navigateToDonates(): void {
    this._route.navigate(['home/donates']);
  }

}
