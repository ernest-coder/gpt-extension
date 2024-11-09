import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from './components/chat/chat-page/chat-page.component';
import { TranslatePageComponent } from './components/translate/translate-page/translate-page.component';
import { GrammarPageComponent } from './components/grammar/grammar-page/grammar-page.component';
import { AuthPageComponent } from './components/auth/auth-page/auth-page.component';
import { PricingPageComponent } from './components/pricing/pricing-page/pricing-page.component';
import { EmailLoginComponent } from './components/auth/email-login/email-login.component';
import { EmailSignupComponent } from './components/auth/email-signup/email-signup.component';
import { UserComponent } from './shared/user/user.component';

const routes: Routes = [
  {
    path: 'chat',
    children: [
      {
        path: '',
        component: ChatPageComponent,
      },
    ],
  },
  {
    path: 'translate',
    children: [
      {
        path: '',
        component: TranslatePageComponent,
      },
    ],
  },
  {
    path: 'grammar',
    children: [
      {
        path: '',
        component: GrammarPageComponent,
      },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        component: AuthPageComponent,
      },
      {
        path: 'email',
        component: EmailLoginComponent,
      },
      {
        path: 'signup',
        component: EmailSignupComponent,
      },
    ],
  },
  {
    path: 'user',
    children: [
      {
        path: '',
        component: UserComponent,
      },
    ],
  },
  {
    path: 'pricing',
    children: [
      {
        path: '',
        component: PricingPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
