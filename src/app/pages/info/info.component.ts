import { Component } from '@angular/core';
import { ButtonPrevComponent } from '../../components/shared/button-prev/button-prev.component';
import { ButtonNextComponent } from '../../components/shared/button-next/button-next.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [  ButtonPrevComponent, ButtonNextComponent ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

}
