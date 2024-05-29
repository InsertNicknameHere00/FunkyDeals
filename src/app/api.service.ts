import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GameListComponent } from './game-list/game-list.component';
import { StoreListComponent } from './store-list/store-list.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private Http=inject(HttpClient);
  
  public getAllDeals() {
    return this.Http.get('https://www.cheapshark.com/api/1.0/deals?');
  }

  public getGameByTitle(gameTitle: string) {
    return this.Http.get('https://www.cheapshark.com/api/1.0/games?title=' + gameTitle);
  }

  public getAllStores() {
    return this.Http.get('https://www.cheapshark.com/api/1.0/stores');
  }

  public getGameDetail(gameID: string): Observable<any> {
    return this.Http.get(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`);
  }

    }