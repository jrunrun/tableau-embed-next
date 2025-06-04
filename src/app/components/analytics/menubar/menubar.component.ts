import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule
  ],
  template: `
    <div class="menubar">
      <button mat-icon-button [matMenuTriggerFor]="refreshMenu" matTooltip="Refresh">
        <mat-icon>refresh</mat-icon>
      </button>
      <mat-menu #refreshMenu="matMenu">
        <button mat-menu-item>
          <mat-icon>refresh</mat-icon>
          <span>Refresh Now</span>
        </button>
        <button mat-menu-item>
          <mat-icon>schedule</mat-icon>
          <span>Schedule Refresh</span>
        </button>
      </mat-menu>

      <button mat-icon-button [matMenuTriggerFor]="exportMenu" matTooltip="Export">
        <mat-icon>download</mat-icon>
      </button>
      <mat-menu #exportMenu="matMenu">
        <button mat-menu-item>
          <mat-icon>picture_as_pdf</mat-icon>
          <span>Export as PDF</span>
        </button>
        <button mat-menu-item>
          <mat-icon>table_chart</mat-icon>
          <span>Export as Excel</span>
        </button>
        <button mat-menu-item>
          <mat-icon>image</mat-icon>
          <span>Export as Image</span>
        </button>
      </mat-menu>

      <button mat-icon-button [matMenuTriggerFor]="filterMenu" matTooltip="Filter">
        <mat-icon>filter_list</mat-icon>
      </button>
      <mat-menu #filterMenu="matMenu">
        <button mat-menu-item>
          <mat-icon>filter_list</mat-icon>
          <span>Apply Filter</span>
        </button>
        <button mat-menu-item>
          <mat-icon>save</mat-icon>
          <span>Save Filter</span>
        </button>
        <button mat-menu-item>
          <mat-icon>delete</mat-icon>
          <span>Clear Filters</span>
        </button>
      </mat-menu>

      <button mat-icon-button [matMenuTriggerFor]="layoutMenu" matTooltip="Layout">
        <mat-icon>dashboard</mat-icon>
      </button>
      <mat-menu #layoutMenu="matMenu">
        <button mat-menu-item>
          <mat-icon>view_agenda</mat-icon>
          <span>List View</span>
        </button>
        <button mat-menu-item>
          <mat-icon>grid_view</mat-icon>
          <span>Grid View</span>
        </button>
        <button mat-menu-item>
          <mat-icon>view_quilt</mat-icon>
          <span>Custom Layout</span>
        </button>
      </mat-menu>

      <button mat-icon-button [matMenuTriggerFor]="shareMenu" matTooltip="Share">
        <mat-icon>share</mat-icon>
      </button>
      <mat-menu #shareMenu="matMenu">
        <button mat-menu-item>
          <mat-icon>link</mat-icon>
          <span>Copy Link</span>
        </button>
        <button mat-menu-item>
          <mat-icon>email</mat-icon>
          <span>Email</span>
        </button>
        <button mat-menu-item>
          <mat-icon>people</mat-icon>
          <span>Share with Team</span>
        </button>
      </mat-menu>

      <button mat-icon-button [matMenuTriggerFor]="settingsMenu" matTooltip="Settings">
        <mat-icon>settings</mat-icon>
      </button>
      <mat-menu #settingsMenu="matMenu">
        <button mat-menu-item>
          <mat-icon>tune</mat-icon>
          <span>Preferences</span>
        </button>
        <button mat-menu-item>
          <mat-icon>notifications</mat-icon>
          <span>Notifications</span>
        </button>
        <button mat-menu-item>
          <mat-icon>help</mat-icon>
          <span>Help & Support</span>
        </button>
      </mat-menu>
    </div>
  `,
  styles: [`
    .menubar {
      display: flex;
      gap: 0.5rem;
      padding: 0.5rem;
      background-color: white;
      border-bottom: 1px solid #e5e7eb;
    }
  `]
})
export class MenubarComponent {} 