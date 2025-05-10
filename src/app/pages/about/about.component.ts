import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PersonalInfo, EducationItem } from '../../interfaces/data-models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;
  education: EducationItem[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioDataService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
    });

    this.portfolioDataService.getEducation().subscribe(education => {
      this.education = education;
    });
  }
}
