import { Component } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { ButtonPrevComponent } from "../../components/shared/button-prev/button-prev.component";
import { ButtonNextComponent } from "../../components/shared/button-next/button-next.component";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ButtonPrevComponent, ButtonNextComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  constructor(
    private sharedService: SharedService
  ) {
  }

  ngOnInit() {
    this.sharedService.triggerUpdateTitle()
  }
}
