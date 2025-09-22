import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredTitleComponent } from './centered-title.component';

describe('CenteredTitleComponent', () => {
  let component: CenteredTitleComponent;
  let fixture: ComponentFixture<CenteredTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteredTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteredTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
