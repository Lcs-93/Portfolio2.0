import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Project } from '../../interfaces/data-models';
import { ModalScreenshotsComponent } from '../../components/modal-screenshots/modal-screenshots.component'; 

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, ModalScreenshotsComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  projectId: string | null = null;
  project: Project | null = null;

  showScreenshots = false;
  screenshots: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portfolioDataService: PortfolioDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id');
      if (this.projectId) {
        this.loadProject(this.projectId);
      } else {
        this.router.navigate(['/projects']);
      }
    });
  }

  loadProject(id: string): void {
    this.portfolioDataService.getProjectById(id).subscribe(project => {
      if (project) {
        this.project = project;
      } else {
        this.router.navigate(['/projects']);
      }
    });
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('fr-FR', options);
  }

  openModal(images: string[]): void {
    this.screenshots = images;
    this.showScreenshots = true;
  }

  closeModal(): void {
    this.showScreenshots = false;
  }
}
