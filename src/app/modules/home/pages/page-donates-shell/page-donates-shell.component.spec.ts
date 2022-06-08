import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDonatesShellComponent } from './page-donates-shell.component';

describe('PageDonatesShellComponent', () => {
  let component: PageDonatesShellComponent;
  let fixture: ComponentFixture<PageDonatesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDonatesShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDonatesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
