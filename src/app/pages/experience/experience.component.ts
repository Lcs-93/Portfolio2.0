import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ExperienceItem } from '../../interfaces/data-models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: ExperienceItem[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioDataService.getExperience().subscribe(experience => {
      this.experience = experience;
    });
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  }
}
