import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-next',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './button-next.component.html',
  styleUrl: './button-next.component.css'
})
export class ButtonNextComponent {
  @Input() link! : string
}
