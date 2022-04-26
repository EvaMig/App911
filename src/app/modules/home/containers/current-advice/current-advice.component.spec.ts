import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAdviceComponent } from './current-advice.component';

describe('CurrentAdviceComponent', () => {
  let component: CurrentAdviceComponent;
  let fixture: ComponentFixture<CurrentAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentAdviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
