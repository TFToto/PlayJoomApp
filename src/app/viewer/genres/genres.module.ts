import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GenresRoutingModule } from './genres-routing.module';
import { GenresComponent } from './genres.component';

@NgModule({
    imports: [
        CommonModule,
        GenresRoutingModule
    ],
    declarations: [
        GenresComponent,
    ]
})
export class GenresModule { }
