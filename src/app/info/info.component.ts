import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.sass'
})
export class InfoComponent {
  pageId = 1

  @Input() set id(value :number){
    this.pageId = value;
  }

  planForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    phone: new FormControl('')
  })

  handleSubmit(){

  }
}
