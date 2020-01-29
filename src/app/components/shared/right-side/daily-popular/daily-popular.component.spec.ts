import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPopularComponent } from './daily-popular.component';

describe('DailyPopularComponent', () => {
  let component: DailyPopularComponent;
  let fixture: ComponentFixture<DailyPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
