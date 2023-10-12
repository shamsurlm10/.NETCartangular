import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import routeConfig from './app/routes';
import { provideRouter } from '@angular/router';
bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), provideRouter(routeConfig)],
}).catch((e) => console.error(e));
