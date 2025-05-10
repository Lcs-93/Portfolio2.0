import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private currentThemeSubject = new BehaviorSubject<ThemeMode>('light');
  
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }
  
  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }
  }
  
  setTheme(theme: ThemeMode): void {
    localStorage.setItem('theme', theme);
    this.currentThemeSubject.next(theme);
    
    if (theme === 'dark') {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
  
  toggleTheme(): void {
    const current = this.currentThemeSubject.value;
    const newTheme: ThemeMode = current === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
  
  getCurrentTheme(): ThemeMode {
    return this.currentThemeSubject.value;
  }
  
  getTheme(): Observable<ThemeMode> {
    return this.currentThemeSubject.asObservable();
  }
}