import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutUsShellComponent } from './page-about-us-shell.component';

describe('PageAboutUsShellComponent', () => {
  let component: PageAboutUsShellComponent;
  let fixture: ComponentFixture<PageAboutUsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAboutUsShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAboutUsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
