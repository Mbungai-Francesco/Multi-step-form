import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-prev',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './button-prev.component.html',
  styleUrl: './button-prev.component.css'
})
export class ButtonPrevComponent {
  @Input() link! : string
}
