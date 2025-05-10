import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortfolioData, Project, Skill } from '../interfaces/data-models';
import { portfolioData } from '../data/portfolio-data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  constructor() { }

  getPortfolioData(): Observable<PortfolioData> {
    // In a real app, you would fetch this from an API
    return of(portfolioData);
  }

  getPersonalInfo() {
    return of(portfolioData.personalInfo);
  }

  getAllSkills(): Observable<Skill[]> {
    return of(portfolioData.skills);
  }

  getSkillsByCategory(): Observable<{ [category: string]: Skill[] }> {
    const categorizedSkills: { [category: string]: Skill[] } = {};
    
    portfolioData.skills.forEach(skill => {
      if (!categorizedSkills[skill.category]) {
        categorizedSkills[skill.category] = [];
      }
      categorizedSkills[skill.category].push(skill);
    });
    
    return of(categorizedSkills);
  }

  getAllProjects(): Observable<Project[]> {
    return of(portfolioData.projects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(portfolioData.projects.filter(project => project.featured));
  }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = portfolioData.projects.find(p => p.id === id);
    return of(project);
  }

  getProjectCategories(): Observable<string[]> {
    const categories = new Set(portfolioData.projects.map(p => p.category));
    return of(Array.from(categories));
  }

  getTestimonials() {
    return of(portfolioData.testimonials);
  }

  getExperience() {
    return of(portfolioData.experience);
  }

  getEducation() {
    return of(portfolioData.education);
  }
}