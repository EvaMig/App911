import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewsShellComponent } from './page-news-shell.component';

describe('PageNewsShellComponent', () => {
  let component: PageNewsShellComponent;
  let fixture: ComponentFixture<PageNewsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNewsShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
