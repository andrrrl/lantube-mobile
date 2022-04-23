import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlayerPage } from 'src/pages/player/player';
import { ConfigPage } from 'src/pages/config/config';
import { ListPage } from 'src/pages/list/list';
import { SearchPage } from 'src/pages/search/search';
import { AddPage } from 'src/pages/add/add';
import { TransferComponent } from 'src/pages/transfer/transfer.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'player',
    component: PlayerPage,
  },
  {
    path: 'config',
    component: ConfigPage,
  },
  {
    path: 'list',
    component: ListPage,
  },
  {
    path: 'search',
    component: SearchPage,
  },
  {
    path: 'add',
    component: AddPage,
  },
  {
    path: 'dapp',
    component: TransferComponent,
  },
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
