import { Component } from '@angular/core';
import { AddsComponent } from "../../components/add-ons/adds/adds.component";
import { ButtonPrevComponent } from "../../components/shared/button-prev/button-prev.component";
import { ButtonNextComponent } from "../../components/shared/button-next/button-next.component";
import { AddOns } from '../../types';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [AddsComponent, ButtonPrevComponent, ButtonNextComponent],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css'
})
export class AddOnsComponent {
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
    private sharedService: SharedService
  ){}

  ngOnInit() {
    this.sharedService.triggerUpdateTitle()
  }
}
