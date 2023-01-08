import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionOutputComponent } from './definition-output.component';

describe('DefinitionOutputComponent', () => {
  let component: DefinitionOutputComponent;
  let fixture: ComponentFixture<DefinitionOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefinitionOutputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DefinitionOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
