import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../api.service';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  templateUrl: './game-detail.component.html',
})
export class GameDetailComponent implements OnInit {
  private $ApiService = inject(APIService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public gameDeals:{storeID:string,dealID:string,price:string,retailPrice:string,savings:string}[] = [];


  ngOnInit() {
    const SelectedGameID = this.route.snapshot.paramMap.get('gameID');
    if (SelectedGameID) {
      console.log('Fetching details for gameID:', SelectedGameID);
      this.$ApiService.getGameDetail(SelectedGameID).subscribe((data: any) => {
          console.log('API response:', data);
          this.gameDeals = data.deals;
        },
      );
    }
  }

  public GoToDeals() {
    this.router.navigate(['deals']);
  }
}
