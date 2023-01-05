import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorLayoutContainerComponent } from './generator-layout-container.component';

describe('GeneratorLayoutContainerComponent', () => {
  let component: GeneratorLayoutContainerComponent;
  let fixture: ComponentFixture<GeneratorLayoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneratorLayoutContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratorLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
