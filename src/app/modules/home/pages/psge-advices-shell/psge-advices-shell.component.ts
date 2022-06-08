import { Component, OnInit } from '@angular/core';
import { ADVICES } from '../../mock-data/list-advices-mock';

@Component({
  selector: 'app-psge-advices-shell',
  templateUrl: './psge-advices-shell.component.html',
  styleUrls: ['./psge-advices-shell.component.scss']
})
export class PsgeAdvicesShellComponent implements OnInit {
  advicesAllList = ADVICES;

  constructor() { }

  ngOnInit(): void {
  }

}
