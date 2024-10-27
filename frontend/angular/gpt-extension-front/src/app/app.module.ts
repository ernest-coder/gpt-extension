import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

import { ChatPageComponent } from './components/chat/chat-page/chat-page.component';
import { TranslateInputComponent } from './components/translate/translate-input/translate-input.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { HomeComponent } from './shared/home/home.component';
import { TranslatePageComponent } from './components/translate/translate-page/translate-page.component';
import { GrammarPageComponent } from './components/grammar/grammar-page/grammar-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    TranslateInputComponent,
    SideMenuComponent,
    HomeComponent,
    TranslatePageComponent,
    GrammarPageComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,    
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatSidenavModule, 
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
