import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { GameListComponent } from './app/game-list/game-list.component';
import { StoreListComponent } from './app/store-list/store-list.component';
import { MenuComponent } from './app/menu/menu.component';
import { GameDetailComponent } from './app/game-list/game-detail.component';

bootstrapApplication(AppComponent, { 
  providers: [provideHttpClient(),
  provideRouter([{ path: 'deals', component: GameListComponent},
  { path: 'stores', component: StoreListComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'game-detail/:gameID', component: GameDetailComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
])]
})
  .catch((err) => console.error(err));
