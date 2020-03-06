import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './application/home/home.component';
import { LoginComponent } from './application/login/login.component';
import { NavComponent } from './application/nav/nav.component';
import { FooterComponent } from './application/footer/footer.component';
import { ContactComponent } from './application/contact/contact.component';
import { DownlinesComponent } from './application/downlines/downlines.component';
import { EventsComponent } from './application/events/events.component';
import { SupportComponent } from './application/support/support.component';
import { KycComponent } from './application/kyc/kyc.component';
import { TermsComponent } from './application/terms/terms.component';
import { PrivacyComponent } from './application/privacy/privacy.component';
import { EducationComponent } from './application/education/education.component';
import { PayoutComponent } from './application/payout/payout.component';
import { NewsComponent } from './application/news/news.component';
import { AboutComponent } from './application/about/about.component';
import { SignupComponent } from './application/signup/signup.component';
import { ResetComponent } from './application/reset/reset.component';
import { UserpanelComponent } from './application/userpanel/userpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    DownlinesComponent,
    EventsComponent,
    SupportComponent,
    KycComponent,
    TermsComponent,
    PrivacyComponent,
    EducationComponent,
    PayoutComponent,
    NewsComponent,
    AboutComponent,
    SignupComponent,
    ResetComponent,
    UserpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
