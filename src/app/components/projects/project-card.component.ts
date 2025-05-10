import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../interfaces/data-models';
import { ModalScreenshotsComponent } from '../modal-screenshots/modal-screenshots.component'; // <-- à adapter selon ton chemin

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ModalScreenshotsComponent // <-- tu dois bien l'importer ici
  ],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;

  showScreenshots = false;
  screenshots: string[] = [];

  openModal(images: string[]): void {
    this.screenshots = images;
    this.showScreenshots = true;
  }

  closeModal(): void {
    this.showScreenshots = false;
  }
}
