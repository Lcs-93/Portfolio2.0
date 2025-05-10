import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectCardComponent } from '../../components/projects/project-card.component';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Project, Skill, Testimonial } from '../../interfaces/data-models';
import { HobbiesComponent } from '../../components/hobbies/hobbies.component'; // car le composant est dans `src/app/pages/hobbies`


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroComponent, ProjectCardComponent, HobbiesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personalBio: string = '';
  topSkills: Skill[] = [];
  featuredProjects: Project[] = [];
  testimonials: Testimonial[] = [];
  currentTestimonial: number = 0;

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioDataService.getPersonalInfo().subscribe(info => {
      this.personalBio = info.bio;
    });

    this.portfolioDataService.getAllSkills().subscribe(skills => {
      this.topSkills = skills.sort((a, b) => b.level - a.level).slice(0, 6);
    });

    this.portfolioDataService.getFeaturedProjects().subscribe(projects => {
      this.featuredProjects = projects;
    });

    this.portfolioDataService.getTestimonials().subscribe(testimonials => {
      this.testimonials = testimonials;
    });
  }

  prevTestimonial(): void {
    if (this.currentTestimonial > 0) {
      this.currentTestimonial--;
    }
  }

  nextTestimonial(): void {
    if (this.currentTestimonial < this.testimonials.length - 1) {
      this.currentTestimonial++;
    }
  }

  setTestimonial(index: number): void {
    this.currentTestimonial = index;
  }
}
