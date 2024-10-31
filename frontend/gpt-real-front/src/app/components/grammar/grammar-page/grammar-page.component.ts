import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertToastService } from 'src/app/services/alert-toast.service';

@Component({
  selector: 'app-grammar-page',
  templateUrl: './grammar-page.component.html',
  styleUrls: ['./grammar-page.component.scss']
})
export class GrammarPageComponent {
  grammarForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertToastService:AlertToastService,
    ) {
    this.grammarForm = this.fb.group({
      textToCorrect: ['', Validators.required],
    });

  }


  onSubmit() {
    
  }

  copyToClipboard() {
    const textToCopy = this.grammarForm.get('textToCorrect')?.value;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(
        () => {
          this.alertToastService.success('Text copied to clipboard successfully!')
        },
        (err) => 
          this.alertToastService.error('Failed to copy text'),
      );
    } else {
      this.alertToastService.info('No text to copy');
    }
  }

  deleteContent() {
    this.grammarForm.get('textToCorrect')?.setValue('');
  }
}