import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PlanComponent } from '../plan/plan.component';
import { InfoComponent } from '../info/info.component';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass'
})
export class FormComponent {
  info = {
    title: 'Personal Plan',
    des: 'Please fill in the form below to create your personal plan.',
  }
  hide = false;
  next = 'plan/2'
  prev = '/1'

  navigateToSomeRoute : Function = () => {}
  constructor(private router: Router){
    this.navigateToSomeRoute = () => {
      this.router.navigate([this.next])
    }
  }

  submit(){
    
  }
}
