import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './artists.component';

@NgModule({
    imports: [
        CommonModule,
        ArtistsRoutingModule
    ],
    declarations: [
        ArtistsComponent,
    ]
})
export class ArtistsModule { }
