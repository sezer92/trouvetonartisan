import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-contact',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulaire envoyé :', this.contactForm.value);


      this.contactForm.reset({
        name: '',
        subject: '',
        message: ''
      });
    }
  }
}
