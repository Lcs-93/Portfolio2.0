import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/projects/project-detail.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Accueil'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'À propos de moi'
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Mes Compétences'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projets'
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent,
    title: 'Projets en détail'
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Expérience'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Me Contacter'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];