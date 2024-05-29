import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})

export class StoreListComponent {
  public storeTitle: string = '';
  constructor(private router: Router) {}
  public StoreCollection: {storeID: string, storeName: string}[] = [];
  private $ApiService = inject(APIService);

  public resetTempData(){
    this.StoreCollection = [];
  }

  public ngOnInit(){
    this.$ApiService.getAllStores().subscribe((data: any) => {
this.StoreCollection=data;
      });
  }

public GoToHome(){
  this.router.navigate(['menu']);
}

}
