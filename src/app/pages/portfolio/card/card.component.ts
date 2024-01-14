import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',

  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private activeRoute: ActivatedRoute) {
    // http://localhost:4200/portfolio/{1}
    this.activeRoute.params.subscribe((res) => console.log(res));

    // Quando o tem child nas rotas
    this.activeRoute.firstChild?.params.subscribe((res) => console.log(res));

    // http://localhost:4200/portfolio/2?{name=Ruben&token=123}
    this.activeRoute.queryParams.subscribe((res) => console.log(res));
  }
}
