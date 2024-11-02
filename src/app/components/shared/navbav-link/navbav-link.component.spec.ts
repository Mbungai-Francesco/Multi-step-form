import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbavLinkComponent } from './navbav-link.component';

describe('NavbavLinkComponent', () => {
  let component: NavbavLinkComponent;
  let fixture: ComponentFixture<NavbavLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbavLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
