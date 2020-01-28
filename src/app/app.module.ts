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
