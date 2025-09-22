import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCardBlockComponent } from './icon-card-block.component';

describe('IconCardBlockComponent', () => {
  let component: IconCardBlockComponent;
  let fixture: ComponentFixture<IconCardBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconCardBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
