import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { playlistsReducer } from './app/features/playlists/store/playlist.reducer';
import { provideEffects } from '@ngrx/effects';
import { PlaylistEffects } from './app/features/playlists/store/playlist.effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ playlists: playlistsReducer }),
    provideEffects([PlaylistEffects]),
    provideAnimations(),
    provideToastr(),
    provideStoreDevtools({
      maxAge: 25,
      // logOnly: environment.production,
    }),
  ]
};