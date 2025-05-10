import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ThemeMode } from '../../services/theme.service';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PersonalInfo } from '../../interfaces/data-models';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;
  currentTheme: ThemeMode = 'light';
  scrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  constructor(
    private themeService: ThemeService,
    private portfolioDataService: PortfolioDataService
  ) {}

  ngOnInit(): void {
    this.themeService.getTheme().subscribe(theme => {
      this.currentTheme = theme;
    });

    this.portfolioDataService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
