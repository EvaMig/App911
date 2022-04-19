import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvicesShellComponent } from './advices-shell.component';

describe('AdvicesShellComponent', () => {
  let component: AdvicesShellComponent;
  let fixture: ComponentFixture<AdvicesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvicesShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvicesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
