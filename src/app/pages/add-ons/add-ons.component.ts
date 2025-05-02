import { Component } from '@angular/core';
import { AddsComponent } from "../../components/add-ons/adds/adds.component";
import { ButtonPrevComponent } from "../../components/shared/button-prev/button-prev.component";
import { ButtonNextComponent } from "../../components/shared/button-next/button-next.component";
import { AddOns, User } from '../../types';
import { SharedService } from '../../services/shared/shared.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [AddsComponent, ButtonPrevComponent, ButtonNextComponent],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css'
})
export class AddOnsComponent {
  user !: User

  adds : AddOns[] = [
    {
      name : "Online Service",
      des : "Access to multiplater games",
      pMo: 1,
      pYr : 10,
      choosen: false
    },
    {
      name : "Large storage",
      des : "Extra 1TB of cloud save",
      pMo: 2,
      pYr : 20,
      choosen: false
    },
    {
      name : "Customizable profile",
      des : "Customize theme on your profile",
      pMo: 2,
      pYr : 20,
      choosen: false
    }
  ]

  constructor (
    private sharedService: SharedService,
    private userService : UserService,
    private router : Router
  ){
    userService.user$.subscribe((res)=>{
      this.user = res
    })
  }

  ngOnInit() {
    this.sharedService.triggerUpdateTitle()
  }

}
