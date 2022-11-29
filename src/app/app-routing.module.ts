import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full'
  },
  {
    path: 'player',
    loadChildren: () => import('./player/player.module').then(m => m.PlayerModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./playlist/playlist.module').then(m => m.PlaylistModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then(m => m.ConfigModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'sensor',
    loadChildren: () => import('./sensor/sensor.module').then(m => m.SensorModule)
  },
  {
    path: 'extras',
    loadChildren: () => import('./extras/extras.module').then(m => m.ExtrasModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
