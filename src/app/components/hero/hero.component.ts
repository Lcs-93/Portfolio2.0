import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PersonalInfo } from '../../interfaces/data-models';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  personalInfo: PersonalInfo | null = null;

  @ViewChild('heroText') heroText!: ElementRef;
  @ViewChild('heroImage') heroImage!: ElementRef;

  constructor(
    private portfolioDataService: PortfolioDataService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.portfolioDataService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
    });
  }

  ngAfterViewInit(): void {
    this.animateHero();
  }

  animateHero(): void {
    document.documentElement.style.setProperty('--primary-500-rgb', '63, 81, 181');

    setTimeout(() => {
      const heroText = this.el.nativeElement.querySelector('.hero-text');
      const heroImage = this.el.nativeElement.querySelector('.hero-image');

      if (heroText) {
        heroText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
      }

      if (heroImage) {
        heroImage.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateY(0) scale(1)';
      }
    }, 300);
  }
}
