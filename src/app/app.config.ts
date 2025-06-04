import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { LucideAngularModule, RefreshCw, Download, Settings, Filter, Layout, Share2 } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    {
      provide: 'ICONS',
      useValue: {
        'refresh-cw': RefreshCw,
        'download': Download,
        'settings': Settings,
        'filter': Filter,
        'layout': Layout,
        'share-2': Share2
      }
    }
  ]
}; 