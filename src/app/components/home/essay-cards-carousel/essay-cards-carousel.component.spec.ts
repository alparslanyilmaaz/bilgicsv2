import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssayCardsCarouselComponent } from './essay-cards-carousel.component';

describe('EssayCardsCarouselComponent', () => {
  let component: EssayCardsCarouselComponent;
  let fixture: ComponentFixture<EssayCardsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssayCardsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssayCardsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
