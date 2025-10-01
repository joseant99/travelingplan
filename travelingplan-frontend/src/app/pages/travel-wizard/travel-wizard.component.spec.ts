import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelWizardComponent } from './travel-wizard.component';

describe('TravelWizardComponent', () => {
  let component: TravelWizardComponent;
  let fixture: ComponentFixture<TravelWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelWizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
