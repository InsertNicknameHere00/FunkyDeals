import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FunkyDeals';
  public IsInMenu:boolean = false;
  constructor(private router: Router) {}

  public GoToMainMenu(){
    this.router.navigate(['menu']);
    this.IsInMenu = true;
  }

  public ngOnInit(){
    this.router.navigate(['']);
this.IsInMenu = false;
  }
}
