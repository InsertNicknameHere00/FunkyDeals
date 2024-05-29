import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import { GameDetailComponent } from './game-detail.component';


@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  constructor(private router: Router) {}
  public gameTitle:string='';
  @Input() GameDetailComponent!: GameDetailComponent;
  public GameCollection:{gameID:string, internalName:string, title:string,dealID:string, normalPrice:string,storeID:string,isOnSale:boolean, thumb:string, salePrice:string,savings:string}[] = [];
  public SearchedGames:{
    gameID:string,
    steamAppID:string,
    cheapest:string,
    cheapestDealID:string,
    external:string,
    internalName:string,
    thumb:string,
  }[]=[];
  private $ApiService=inject(APIService);

  public ngOnInit() {
    this.$ApiService.getAllDeals().subscribe((data: any) => {
      this.GameCollection = data;
      console.log('GET response:', data);
      });
      console.log(this.GameCollection);
    }

  public resetTempData() {
    this.GameCollection = [];
    this.SearchedGames = [];
  }

  public processSearch() {
    this.resetTempData();
    this.$ApiService.getGameByTitle(this.gameTitle).subscribe((data: any) => {
      this.SearchedGames = data;
      console.log('API search response:', data);
    });

      console.log("Here are the final results for the searched games: " ,this.SearchedGames);
}
    
    public GoToHome(){
      this.router.navigate(['menu']);
    }

   public GoToGameDetail(gameID: string) {
    this.router.navigate(['game-detail', gameID]);
}

public Refresh(){
  this.gameTitle='';
  this.resetTempData();
  this.ngOnInit();
}


  }
