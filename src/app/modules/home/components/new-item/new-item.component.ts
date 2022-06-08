import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  @Input() data: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToCurrentNew(event: any): void {
    this.router.navigate(['home/new', event.id]);
  }
}
