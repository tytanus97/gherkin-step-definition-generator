import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorActionsComponent } from './generator-actions.component';

describe('GeneratorActionsComponent', () => {
  let component: GeneratorActionsComponent;
  let fixture: ComponentFixture<GeneratorActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneratorActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratorActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
