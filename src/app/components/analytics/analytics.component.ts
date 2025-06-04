import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { VizComponent } from './viz/viz.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, MenubarComponent, VizComponent],
  template: `
    <div class="flex flex-col h-full">
      <app-menubar></app-menubar>
      <div class="flex-1 p-4">
        <app-viz
          [dashboardName]="currentDashboard"
          [isAuthoringMode]="isAuthoringMode"
          [filters]="currentFilters">
        </app-viz>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class AnalyticsComponent implements OnInit {
  currentDashboard = 'SampleDashboard';
  isAuthoringMode = false;
  currentFilters = {};

  constructor() {}

  ngOnInit(): void {
    // Load saved dashboard and filters from localStorage if available
    const savedDashboard = localStorage.getItem('currentDashboard');
    if (savedDashboard) {
      this.currentDashboard = savedDashboard;
    }

    const savedFilters = localStorage.getItem('currentFilters');
    if (savedFilters) {
      this.currentFilters = JSON.parse(savedFilters);
    }
  }
} 