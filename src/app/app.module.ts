import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, tr_TR } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import tr from '@angular/common/locales/tr';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule, MatNavList} from '@angular/material/list';
import { EssayCardsCarouselComponent } from './components/home/essay-cards-carousel/essay-cards-carousel.component';
import { NavComponent } from './components/home/nav/nav.component';
import { MatRippleModule } from '@angular/material/core';
import { ContentCardsComponent } from './components/home/content-cards/content-cards.component';
import { ContentComponent } from './components/content/content.component';
import { CardComponent } from './components/shared/card/card.component';
import { TopSliderComponent } from './components/shared/top-slider/top-slider.component';
import { RightSideComponent } from './components/shared/right-side/right-side.component';
import { DailyPopularComponent } from './components/shared/right-side/daily-popular/daily-popular.component';
import { MostPopularComponent } from './components/shared/right-side/most-popular/most-popular.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TagsComponent } from './components/shared/right-side/tags/tags.component';
import { ContentHolderComponent } from './components/content/content-holder/content-holder.component';
import { ContentDetailComponent } from './components/shared/content-detail/content-detail.component';
import { ContentLeftSocialMediaIconsComponent } from './components/shared/content-detail/content-left-social-media-icons/content-left-social-media-icons.component';

registerLocaleData(tr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EssayCardsCarouselComponent,
    NavComponent,
    ContentCardsComponent,
    ContentComponent,
    CardComponent,
    TopSliderComponent,
    RightSideComponent,
    DailyPopularComponent,
    MostPopularComponent,
    FooterComponent,
    TagsComponent,
    ContentHolderComponent,
    ContentDetailComponent,
    ContentLeftSocialMediaIconsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,

  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatRippleModule
  ],
  providers: [{ provide: NZ_I18N, useValue: tr_TR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
