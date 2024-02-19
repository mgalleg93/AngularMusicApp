import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'musicapp';

  constructor(private router: Router) {}

  displayArtistList() {
    this.router.navigate(['list-artists'], { queryParams: { data: new Date()} });
  }
}
