import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLineComponent } from './floating-line.component';

describe('FloatingLineComponent', () => {
  let component: FloatingLineComponent;
  let fixture: ComponentFixture<FloatingLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
