import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advice-item',
  templateUrl: './advice-item.component.html',
  styleUrls: ['./advice-item.component.scss']
})
export class AdviceItemComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
