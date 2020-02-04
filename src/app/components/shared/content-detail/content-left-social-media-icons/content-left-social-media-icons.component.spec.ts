import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLeftSocialMediaIconsComponent } from './content-left-social-media-icons.component';

describe('ContentLeftSocialMediaIconsComponent', () => {
  let component: ContentLeftSocialMediaIconsComponent;
  let fixture: ComponentFixture<ContentLeftSocialMediaIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLeftSocialMediaIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLeftSocialMediaIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
