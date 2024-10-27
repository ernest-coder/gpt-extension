import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl:'./side-menu.component.css',
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

  get currentUrl() : string {
    return this.router.url
  }

}
