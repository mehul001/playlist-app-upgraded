import { Component, Input } from '@angular/core';
import { Playlist } from '../../models/playlist.model';
import { Store } from '@ngrx/store';
import { selectAuthenticated } from '../../store/playlist.selectors';
import { CommonModule, AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-playlist-item',
    templateUrl: './playlist-item.component.html',
    styleUrls: ['./playlist-item.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      MatCardModule,
      MatIconModule,
      MatTooltipModule,
      AsyncPipe
    ]
})
export class PlaylistItemComponent {
  @Input() playlist!: Playlist;

  authenticated$ = this.store.select(selectAuthenticated);

  constructor(private store: Store) { }
}