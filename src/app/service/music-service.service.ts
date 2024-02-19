import { Injectable } from '@angular/core';
// import * as exampledata from '../data/sample-music-data.json';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  // albums: Album[] = exampledata;

  constructor() { }

  public getArtists(): Artist[] {
    let returnThese: Artist[] = [];
    return returnThese;
  }

  public getAlbums(artist:string):Album[] {
    let returnThese: Album[] = [];
    return returnThese;
  }

  public getAlbum(artist:string, id:number):Album {
    const newAlbum: Album = {
      albumId: 5, // or generate a unique identifier
      title: 'New Album',
      artist: 'New Artist',
      description: 'Description of the new album',
      year: '2023', // or any other year
      image: 'path/to/image.jpg',
      tracks: [] // Assuming there are no tracks initially
    };
    return newAlbum;
  }

  public deleteAlbum(id:number, artist:string):number {
    return 1;
  }
}
