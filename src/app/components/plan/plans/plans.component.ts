import { Component, ElementRef, Input } from '@angular/core';
import { Plan, PlanType } from '../../../types';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  @Input() plan !: Plan 
  @Input() planType : PlanType = PlanType.MONTHLY
  @Input() htmlString !: string
  svg: HTMLElement = document.createElement('div');	

  constructor( private elRef : ElementRef){}

  ngOnInit() {
    this.svg = this.convertStringToHtmlElement(this.htmlString);
    console.log(this.svg);

    // Append the HTML element to the container div
    this.elRef.nativeElement.querySelector('#container').appendChild(this.svg);
  }

  // Helper function to convert a string to an HTML element
  private convertStringToHtmlElement(html: string): HTMLElement {
    const template = document.createElement('template'); // Create a template element
    template.innerHTML = html.trim(); // Set the HTML string

    return template.content.firstChild as HTMLElement; // Return the HTML element
  }
}
