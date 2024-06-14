import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
=======

platformBrowserDynamic().bootstrapModule(AppModule)
>>>>>>> 61494afc361acc77612e4fd263cbfd51de71bbc1
  .catch(err => console.error(err));
