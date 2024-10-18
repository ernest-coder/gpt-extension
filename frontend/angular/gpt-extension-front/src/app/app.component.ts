import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { HomeComponent } from './shared/home/home.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbarModule, 
    MatSidenavModule, 
    SideMenuComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'gpt-extension-front';
}
