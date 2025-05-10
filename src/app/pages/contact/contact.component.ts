import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PersonalInfo, SocialLink } from '../../interfaces/data-models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;
  socialLinks: SocialLink[] = [];
  contactForm: FormGroup;
  submitting = false;
  formSubmitted = false;
  submitSuccess = false;

  constructor(
    private fb: FormBuilder,
    private portfolioDataService: PortfolioDataService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.portfolioDataService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
      this.socialLinks = info.socialLinks;
    });
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.submitting = true;

    setTimeout(() => {
      this.submitting = false;
      this.formSubmitted = true;
      this.submitSuccess = true;
      this.contactForm.reset();
    }, 1500);
  }
}
