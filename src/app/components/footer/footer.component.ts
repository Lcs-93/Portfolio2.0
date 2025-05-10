import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PersonalInfo, SocialLink } from '../../interfaces/data-models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;
  socialLinks: SocialLink[] = [];
  currentYear: number = new Date().getFullYear();

  constructor(private portfolioDataService: PortfolioDataService) { }

  ngOnInit(): void {
    this.portfolioDataService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
      this.socialLinks = info.socialLinks;
    });
  }
}
