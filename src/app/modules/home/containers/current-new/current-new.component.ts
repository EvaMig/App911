import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvicesService } from '../../services/advices.service';

@Component({
  selector: 'app-current-new',
  templateUrl: './current-new.component.html',
  styleUrls: ['./current-new.component.scss']
})
export class CurrentNewComponent implements OnInit {
  currentNew: any;
  isUploaded: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _advicesService: AdvicesService,
  ) { }

  ngOnInit(): void {
    this.route.params
    .pipe()
    .subscribe(
      (data: any) => {
        console.log(data.id);
        this.setCurrentNew(data.id);
      }
    )
  }

  setCurrentNew(currentId: number): void {
    this._advicesService.getCurrentNew(currentId)
      .pipe()
      .subscribe((data) => {
        this.currentNew = data;
        this.isUploaded = true;
      })
    }
}
