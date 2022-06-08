import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsgeAdvicesShellComponent } from './psge-advices-shell.component';

describe('PsgeAdvicesShellComponent', () => {
  let component: PsgeAdvicesShellComponent;
  let fixture: ComponentFixture<PsgeAdvicesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsgeAdvicesShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsgeAdvicesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
