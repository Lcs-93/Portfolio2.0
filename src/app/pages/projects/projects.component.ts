import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectCardComponent } from '../../components/projects/project-card.component';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Project } from '../../interfaces/data-models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: string[] = ['All'];
  activeCategory: string = 'All';
  searchQuery: string = '';

  constructor(private portfolioDataService: PortfolioDataService) { }

  ngOnInit(): void {
    this.portfolioDataService.getAllProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = [...projects];
    });

    this.portfolioDataService.getProjectCategories().subscribe(categories => {
      this.categories = ['All', ...categories];
    });
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
    this.filterProjects();
  }

  filterProjects(): void {
    let filtered = this.activeCategory === 'All'
      ? [...this.projects]
      : this.projects.filter(project => project.category === this.activeCategory);

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        (project.shortDescription && project.shortDescription.toLowerCase().includes(query)) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }

    this.filteredProjects = filtered;
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.filterProjects();
  }

  resetFilters(): void {
    this.activeCategory = 'All';
    this.searchQuery = '';
    this.filteredProjects = [...this.projects];
  }
}
