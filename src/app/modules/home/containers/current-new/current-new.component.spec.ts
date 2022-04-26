import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentNewComponent } from './current-new.component';

describe('CurrentNewComponent', () => {
  let component: CurrentNewComponent;
  let fixture: ComponentFixture<CurrentNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
