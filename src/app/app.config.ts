import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DomSanitizer as Dom} from '@angular/platform-browser';

export const DomSanitizer = new InjectionToken<Dom>('DomSanitizer');
export const WINDOW = new InjectionToken<Window>('Window');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    {provide : WINDOW, useValue: window},
    {provide : DomSanitizer, useValue : DomSanitizer}
  ]
};
