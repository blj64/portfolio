import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceAutreComponent } from './competence-autre.component';

describe('CompetenceAutreComponent', () => {
  let component: CompetenceAutreComponent;
  let fixture: ComponentFixture<CompetenceAutreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenceAutreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceAutreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
