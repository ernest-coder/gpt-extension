import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatSidenavModule, 
    CommonModule,
  ],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  constructor(private router: Router) { }

  loadChatPage():void {
    this.router.navigate(['/chat']); 
  }

  loadTranslatePage():void {
    this.router.navigate(['/translate']); 
  }

  loadGrammarPage():void {
    this.router.navigate(['/grammar']); 
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

}
