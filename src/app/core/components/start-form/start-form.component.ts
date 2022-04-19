import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.scss']
})
export class StartFormComponent implements OnInit {

  formAuthorization: FormGroup;
  constructor(private _route: Router) { }

  ngOnInit(): void {
    this.formAuthorization = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  navigateToHome(): void {
    this._route.navigate(['home']);
  }
}
