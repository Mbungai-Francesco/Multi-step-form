import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass'
})
export class FormComponent {
  info = {
    title : 'Personal info',
    des : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut!'
  }
  hide = false
}
