import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-viz',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="viz-container">
      <div class="viz-header">
        <h2>Analytics Dashboard</h2>
        <div class="viz-actions">
          <button mat-icon-button matTooltip="Refresh">
            <mat-icon>refresh</mat-icon>
          </button>
          <button mat-icon-button matTooltip="Fullscreen">
            <mat-icon>fullscreen</mat-icon>
          </button>
        </div>
      </div>

      <div class="viz-content" #vizContainer>
        <mat-spinner *ngIf="isLoading"></mat-spinner>
        <div *ngIf="error" class="error-message">
          <mat-icon>error</mat-icon>
          <p>{{ error }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .viz-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .viz-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #e5e7eb;
    }

    .viz-header h2 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: #111827;
    }

    .viz-actions {
      display: flex;
      gap: 0.5rem;
    }

    .viz-content {
      flex: 1;
      position: relative;
      padding: 1rem;
      overflow: auto;
    }

    .error-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #ef4444;
      text-align: center;
    }

    .error-message mat-icon {
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
      margin-bottom: 1rem;
    }

    .error-message p {
      margin: 0;
      font-size: 1.125rem;
    }
  `]
})
export class VizComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() dashboardName: string = '';
  @Input() isAuthoringMode = false;
  @Input() filters: { [key: string]: any } = {};
  @ViewChild('vizContainer') vizContainer!: ElementRef;
  isLoading = true;
  error: string | null = null;

  constructor() {}

  ngOnInit(): void {
    // Initialize any required data or services
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters'] && !changes['filters'].firstChange) {
      this.applyFilters();
    }
  }

  ngAfterViewInit(): void {
    // Initialize visualization after view is ready
    this.initializeViz();
  }

  private initializeViz(): void {
    try {
      // TODO: Initialize your visualization here
      // This is where you would typically initialize Tableau, D3, or other visualization library
      
      // Simulate loading for now
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    } catch (err) {
      this.error = 'Failed to initialize visualization';
      this.isLoading = false;
      console.error('Viz initialization error:', err);
    }
  }

  onFirstInteractive(event: any): void {
    console.log('Viz is interactive:', event);
    this.applyFilters();
  }

  onFilterChanged(event: any): void {
    console.log('Filter changed:', event);
    // You can handle filter changes here, e.g., update parent component
  }

  onMarksSelected(event: any): void {
    console.log('Marks selected:', event);
    // You can handle mark selection here, e.g., show details in a side panel
  }

  onTabSwitched(event: any): void {
    console.log('Tab switched:', event);
    // You can handle tab switches here, e.g., update navigation state
  }

  onStoryPointSwitched(event: any): void {
    console.log('Story point switched:', event);
    // You can handle story point switches here, e.g., update navigation state
  }

  onParameterChanged(event: any): void {
    console.log('Parameter changed:', event);
    // You can handle parameter changes here, e.g., update URL parameters
  }

  async applyFilters(): Promise<void> {
    const viz = this.vizContainer?.nativeElement as any;
    if (!viz?.workbook) return;

    try {
      const activeSheet = await viz.workbook.getActiveSheetAsync();
      if (!activeSheet?.applyFilterAsync) return;

      for (const [key, value] of Object.entries(this.filters)) {
        await activeSheet.applyFilterAsync(key, value, 'replace');
      }
    } catch (error) {
      console.error('Error applying filters:', error);
    }
  }

  async refreshData(): Promise<void> {
    const viz = this.vizContainer?.nativeElement as any;
    if (!viz) return;

    try {
      await viz.refreshDataAsync();
    } catch (error) {
      console.error('Error refreshing data:', error);
    }
  }

  async getCurrentFilters(): Promise<Tableau.Filter[]> {
    const viz = this.vizContainer?.nativeElement as any;
    if (!viz?.workbook) return [];

    try {
      const activeSheet = await viz.workbook.getActiveSheetAsync();
      if (!activeSheet?.getFiltersAsync) return [];

      return await activeSheet.getFiltersAsync();
    } catch (error) {
      console.error('Error getting filters:', error);
      return [];
    }
  }
} 