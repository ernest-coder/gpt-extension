import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';  // for mat-option
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-translate-input',
  standalone: true,
  imports: [
    BrowserModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,   
    MatOptionModule,  
    MatInputModule,    
    BrowserAnimationsModule,
  ],
  templateUrl: './translate-input.component.html',
  styleUrl:'./translate-input.component.css'
})

export class TranslateInputComponent {
  translateForm: FormGroup;

  languages = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Chinese', value: 'zh' },
  ];

  constructor(private fb: FormBuilder) {
    this.translateForm = this.fb.group({
      inputLanguage: ['en'],
      outputLanguage: ['en'],
      textToTranslate: [''],
    });
  }

  onSubmit() {
    const formData = this.translateForm.value;
    console.log('Translating to:', formData.language);
    console.log('Text to translate:', formData.textToTranslate);
  }

}


