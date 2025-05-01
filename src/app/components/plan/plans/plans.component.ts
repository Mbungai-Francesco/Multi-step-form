import { Component, ElementRef, Input } from '@angular/core';
import { Plan, User } from '../../../types';
import { UserService } from '../../../services/user.service';
import { PlansService } from '../../../services/plans/plans.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  @Input() plan !: Plan 
  @Input() htmlString !: string

  svg: HTMLElement = document.createElement('div');	
  user !: User
  plans !: Plan[]

  constructor( private elRef : ElementRef, private userService : UserService, private plansService: PlansService){
    this.userService.user$.subscribe((user) => {
      this.user = user
      if(this.user.plan != this.plan && this.plan.choosen){
        this.plan.choosen = false
        this.plansService.updatePlans(this.plan)
      }
    })
    this.plansService.plans$.subscribe((plans) => {
      this.plans = plans
    })
    // console.log(this.user);
  }

  ngOnInit() {
    this.svg = this.convertStringToHtmlElement(this.htmlString);

    // Append the HTML element to the container div
    this.elRef.nativeElement.querySelector('#container').appendChild(this.svg);
    console.log(this.plan);
    
  }

  // Helper function to convert a string to an HTML element
  private convertStringToHtmlElement(html: string): HTMLElement {
    const template = document.createElement('template'); // Create a template element
    template.innerHTML = html.trim(); // Set the HTML string

    return template.content.firstChild as HTMLElement; // Return the HTML element
  }

  chosePlan = () =>{
    this.user.plan = this.plan
    this.plan.choosen = true
    this.userService.updateUser(this.user)
    this.plansService.updatePlans(this.plan)
  }
}
