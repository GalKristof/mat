import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HeaderCurveComponent } from './curves/header-curve/header-curve.component';
import { CallUsComponent } from './call-us/call-us.component';
import { DivideCurveComponent } from './curves/divide-curve/divide-curve.component';
import { ServicesComponent } from './services/services.component';
import { ServiceCardComponent } from './services/service-card/service-card.component';
import { SubpageComponent } from './subpage/subpage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    TestimonialComponent,
    HeaderCurveComponent,
    CallUsComponent,
    DivideCurveComponent,
    ServicesComponent,
    ServiceCardComponent,
    SubpageComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
