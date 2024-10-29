import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router) { }

  loadAuthPage():void {
    this.router.navigate(['/auth']); 
  }
  
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