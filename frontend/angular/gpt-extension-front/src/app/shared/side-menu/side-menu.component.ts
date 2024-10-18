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
  ],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  constructor(private vcr: ViewContainerRef, private cfr: ComponentFactoryResolver) {}

  async loadChatPage() {
    // Clear the current view
    this.vcr.clear();

    // Dynamically load the ChatPageComponent
    const { ChatPageComponent } = await import('../../components/chat/chat-page/chat-page.component'); // Path to ChatPageComponent
    const componentFactory = this.cfr.resolveComponentFactory(ChatPageComponent);
    this.vcr.createComponent(componentFactory);
  }

}
