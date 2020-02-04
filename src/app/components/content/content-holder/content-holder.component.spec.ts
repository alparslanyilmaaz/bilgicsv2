import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHolderComponent } from './content-holder.component';

describe('ContentHolderComponent', () => {
  let component: ContentHolderComponent;
  let fixture: ComponentFixture<ContentHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
