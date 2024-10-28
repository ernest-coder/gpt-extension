import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrls: ['./translate-page.component.scss']
})
export class TranslatePageComponent {
  translateForm: FormGroup;

  constructor(private fb: FormBuilder,  ) {
    this.translateForm = this.fb.group({
      inputLanguage: ['xx', Validators.required],
      textToTranslate: ['', Validators.required],
      outputLanguage: ['en', Validators.required],
    });
  }

  languages = [
    { label: 'Automatic', value: 'xx' },
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Chinese', value: 'zh' },
  ];

  onSubmit() {
  }

}


