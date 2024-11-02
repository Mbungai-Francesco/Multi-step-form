import { Component } from '@angular/core';
import { NavbavLinkComponent } from "../navbav-link/navbav-link.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbavLinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
