import { Routes } from '@angular/router';
import { HomeComponent } from './app/features/playlists/components/home/home.component';
import { PlaylistItemComponent } from './app/features/playlists/components/playlist-item/playlist-item.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'playlists', component: PlaylistItemComponent }
];