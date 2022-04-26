import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvicesService } from '../../services/advices.service';

@Component({
  selector: 'app-current-advice',
  templateUrl: './current-advice.component.html',
  styleUrls: ['./current-advice.component.scss']
})
export class CurrentAdviceComponent implements OnInit {
  currentAdvice: any;
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
          this.setCurrentAdvice(data.id);
        }
      )
  }

  setCurrentAdvice(currentId: number): void {
    this._advicesService.getCurrentAdvice(currentId)
      .pipe()
      .subscribe((data) => {
        this.currentAdvice = data;
        this.isUploaded = true;
      })
  }

}
