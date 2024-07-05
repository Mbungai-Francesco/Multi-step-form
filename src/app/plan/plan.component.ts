import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.sass'
})
export class PlanComponent {
  pageId = 2

  @Input() set id(value :number){
    this.pageId = value;
  }
}
