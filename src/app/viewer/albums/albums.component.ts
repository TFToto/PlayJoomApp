import { Component, OnInit } from '@angular/core';
import { PjddataService } from '../../_services/index';


@Component({
  selector: 'pja-album-cover',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

   model: any = {};
   albums: Albums[];
   imagedata: ImageData[];

   constructor(private dataService: PjddataService) { }

   ngOnInit() {

      this.dataService.getAlbums().subscribe((albums) => {

         this.albums = albums.json();

         this.albums.forEach(item => {
            this.dataService.getCoverGallery(item).subscribe((cover) => {
               this.imagedata = cover.json();
            });
         });
      });
   }

   getCover(album) {

      console.log('cover for album',album);

//      this.dataService.getCoverGallery(album.coverid).subscribe((cover) => {
//        this.image_data = cover.json();
//      });
   }
}

interface Albums {
   artist: string;
   album: string;
   year: number;
   genre: string;
}

interface ImageData {
   mime: string;
   width: number;
   height: number;
   imagedata: string;
}

