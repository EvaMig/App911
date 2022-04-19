import { Component, OnInit } from '@angular/core';
import { ADVICES } from '../../mock-data/list-advices-mock';

@Component({
  selector: 'app-advices-shell',
  templateUrl: './advices-shell.component.html',
  styleUrls: ['./advices-shell.component.scss']
})
export class AdvicesShellComponent implements OnInit {
  advicesList = ADVICES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
