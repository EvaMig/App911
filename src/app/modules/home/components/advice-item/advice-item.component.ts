import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advice-item',
  templateUrl: './advice-item.component.html',
  styleUrls: ['./advice-item.component.scss']
})
export class AdviceItemComponent implements OnInit {

  @Input() data: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToCurrentAdvice(event: any): void {
    console.log(event);
    this.router.navigate(['home/advice', event.id]);
  }

}
