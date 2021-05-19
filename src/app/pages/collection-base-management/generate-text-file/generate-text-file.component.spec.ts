import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTextFileComponent } from './generate-text-file.component';

describe('GenerateTextFileComponent', () => {
  let component: GenerateTextFileComponent;
  let fixture: ComponentFixture<GenerateTextFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateTextFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTextFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
