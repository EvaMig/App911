import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsShellComponent } from './news-shell.component';

describe('NewsShellComponent', () => {
  let component: NewsShellComponent;
  let fixture: ComponentFixture<NewsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
