import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';

@Component({
  selector: 'app-start-form',
  templateUrl: './start-form.component.html',
  styleUrls: ['./start-form.component.scss']
})
export class StartFormComponent implements OnInit {

  formAuthorization: FormGroup;
  result: any;
  constructor(private _route: Router, private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.formAuthorization = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  navigateToHome(): void {
    if(this.formAuthorization.invalid) {
      this.formAuthorization.markAllAsTouched()
    } else {
      this.result = this.authorizationService.login(this.formAuthorization.value);
      if(this.result.status === 2) {
        this._route.navigate(['home']);
      }
    }
  }
}
