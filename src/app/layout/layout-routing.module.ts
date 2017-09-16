import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, 
        children: [
            { path: 'dash', loadChildren: '../viewer/dash/dash.module#DashModule' },
            { path: 'albums', loadChildren: '../viewer/albums/albums.module#AlbumsModule' },
            { path: 'genres', loadChildren: '../viewer/genres/genres.module#GenresModule' },
            { path: 'artists', loadChildren: '../viewer/artists/artists.module#ArtistsModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
