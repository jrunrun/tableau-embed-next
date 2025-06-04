import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Welcome to Tableau Embed</h1>
      <p>Select a dashboard from the sidebar to get started.</p>
    </div>
  `,
  styles: []
})
export class HomeComponent {} 