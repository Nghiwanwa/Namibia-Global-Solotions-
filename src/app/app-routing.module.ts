import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './application/about/about.component';
import { ContactComponent } from './application/contact/contact.component';
import { DownlinesComponent } from './application/downlines/downlines.component';
import { EducationComponent } from './application/education/education.component';
import { EventsComponent } from './application/events/events.component';
import { FooterComponent } from './application/footer/footer.component';
import { HomeComponent } from './application/home/home.component';
import { KycComponent } from './application/kyc/kyc.component';
import { LoginComponent } from './application/login/login.component';
import { NavComponent } from './application/nav/nav.component';
import { NewsComponent } from './application/news/news.component';
import { PayoutComponent } from './application/payout/payout.component';
import { PrivacyComponent } from './application/privacy/privacy.component';
import { ResetComponent } from './application/reset/reset.component';
import { SignupComponent } from './application/signup/signup.component';
import { SupportComponent } from './application/support/support.component';
import { TermsComponent } from './application/terms/terms.component';
import { UserpanelComponent } from './application/userpanel/userpanel.component';

const routes: Routes = [
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"downlines",
    component:DownlinesComponent
  },
  {
    path:"education",
    component:EducationComponent
  },
  {
    path:"events",
    component:EventsComponent
  },
  {
    path:"footer",
    component:FooterComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
  path:"kyc",
  component:KycComponent
  },
  {
    path:"login",
    component:LoginComponent
    },
    {
    path:"nav",
    component:NavComponent
    },
    {
      path:"news",
      component:NewsComponent
      },
      {
        path:"payout",
        component:PayoutComponent
      },
      {
        path:"privacy",
        component:PrivacyComponent
      },
      {
        path:"reset",
        component:ResetComponent
      },
      {
        path:"signup",
        component:SignupComponent
      },
      {
        path:"support",
        component:SupportComponent
      },
      {
        path:"terms",
        component:TermsComponent
      },
      {
        path:"userpanel",
        component:UserpanelComponent
      },
      
      
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
