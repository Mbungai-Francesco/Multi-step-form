import { Component, Input } from '@angular/core';
import { navLink } from '../../../types';

@Component({
  selector: 'app-navbav-link',
  standalone: true,
  imports: [],
  templateUrl: './navbav-link.component.html',
  styleUrl: './navbav-link.component.css'
})
export class NavbavLinkComponent {
  @Input() navlink! : navLink

  active = false;
  
  ngOnInit() {
    this.navlink ={
      name: 'Home',
      link: '/home',
      num: 1
    }
  }
}
