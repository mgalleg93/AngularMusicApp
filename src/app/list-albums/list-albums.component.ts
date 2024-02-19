import { Component, Input } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import { DisplayAlbumComponent } from '../display-album/display-album.component';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [DisplayAlbumComponent],
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})
export class ListAlbumsComponent {
  @Input() artist: Artist | undefined;
  selectedAlbum: Album | null = null

  constructor(private service: MusicServiceService) {}

  ngOnInit() {
    // this.albums = this.service.getAlbumsOfArtist(this.artist!.artist);
  }

  public onSelectAlbum(album: Album)
  {
    	this.selectedAlbum = album;
  }

}
