import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthPageComponent } from './components/auth/auth-page/auth-page.component';
import { ChatPageComponent } from './components/chat/chat-page/chat-page.component';
import { GrammarPageComponent } from './components/grammar/grammar-page/grammar-page.component';
import { TranslatePageComponent } from './components/translate/translate-page/translate-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ButtonAccentComponent } from './shared/button-accent/button-accent.component';
import { ButtonCancelComponent } from './shared/button-cancel/button-cancel.component';
import { ButtonDangerComponent } from './shared/button-danger/button-danger.component';
import { ButtonPrimaryComponent } from './shared/button-primary/button-primary.component';
import { ButtonTertiaryComponent } from './shared/button-tertiary/button-tertiary.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PricingPageComponent } from './components/pricing/pricing-page/pricing-page.component';
import { AlertToastComponent } from './shared/alert-toast/alert-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AuthPageComponent,
    ChatPageComponent,
    GrammarPageComponent,
    TranslatePageComponent,
    ButtonAccentComponent,
    ButtonCancelComponent,
    ButtonDangerComponent,
    ButtonPrimaryComponent,
    ButtonTertiaryComponent,
    FooterComponent,
    PricingPageComponent,
    AlertToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
