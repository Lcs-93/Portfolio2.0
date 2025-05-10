import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Skill } from '../../interfaces/data-models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  categories: string[] = [];
  activeCategory: string = 'All';
  filteredSkills: Skill[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioDataService.getAllSkills().subscribe(skills => {
      this.skills = skills;
      const uniqueCategories = new Set(skills.map(skill => skill.category));
      this.categories = ['All', ...Array.from(uniqueCategories)];
      this.filterSkills();
    });
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
    this.filterSkills();
  }

  filterSkills(): void {
    this.filteredSkills = this.activeCategory === 'All'
      ? [...this.skills]
      : this.skills.filter(skill => skill.category === this.activeCategory);

    this.filteredSkills.sort((a, b) => b.level - a.level);
  }
}
