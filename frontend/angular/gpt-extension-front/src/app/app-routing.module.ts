import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatPageComponent } from './components/chat/chat-page/chat-page.component';
import { HomeComponent } from './shared/home/home.component';
import { TranslatePageComponent } from './components/translate/translate-page/translate-page.component';
import { GrammarPageComponent } from './components/grammar/grammar-page/grammar-page.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'chat', component: ChatPageComponent }, 
      { path: 'translate', component: TranslatePageComponent }, 
      { path: 'grammar', component: GrammarPageComponent }, 
      { path: 'home', component: HomeComponent }, 
    ]
  },
];
