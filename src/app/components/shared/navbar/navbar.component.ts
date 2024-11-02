import { Component, ViewChild, ViewChildren } from '@angular/core';
import { NavbavLinkComponent } from "../navbav-link/navbav-link.component";
import { Router } from '@angular/router';
import { navLink } from '../../../types';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbavLinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  links : navLink[] = []

  @ViewChildren(NavbavLinkComponent) navbavLinkComponent !: NavbavLinkComponent[]

  constructor( private router: Router ) {
    console.log(this.router.config);
    const routes = this.router.config;
    for (let i = 0; i < routes.length; i++) {
      this.links.push({
        num: i,
        name: routes[i].path,
        link: routes[i].path
      })
    }
    console.log(this.links);
    
  }
  
  check = () =>{
    this.navbavLinkComponent.forEach((navbavLinkComponent) => {
      navbavLinkComponent.checkRoute()
    })
  }

  ngOnInit() {
    
  }
}
