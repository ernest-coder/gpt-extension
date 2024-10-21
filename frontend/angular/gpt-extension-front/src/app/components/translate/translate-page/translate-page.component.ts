import { Component } from '@angular/core';
import { TranslateInputComponent } from '../translate-input/translate-input.component';

@Component({
  selector: 'app-translate-page',
  standalone: true,
  imports: [TranslateInputComponent],
  templateUrl: './translate-page.component.html',
})
export class TranslatePageComponent {

}
