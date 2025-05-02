import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { navLink } from '../../../types';
import { RouterLink } from '@angular/router';
import { WINDOW } from '../../../app.config';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-navbav-link',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './navbav-link.component.html',
  styleUrl: './navbav-link.component.css'
})
export class NavbavLinkComponent {
  @Input() navlink! : navLink
  // @Output() activeOrNot = new EventEmitter()
  active = false;
  currentPath !: string;

  constructor(
    @Inject(WINDOW) private window: Window,
    private sharedService: SharedService
  ) {}

  checkRoute = () =>{
    this.currentPath = this.window.location.pathname.split('/')[1]
    if(this.currentPath == this.navlink.link) this.active = true
    else this.active = false
    // console.log(this.currentPath);
  }

  ngOnInit() {
    this.sharedService.updateTitle$.subscribe(() => {
      this.checkRoute()
    });
  }
}
