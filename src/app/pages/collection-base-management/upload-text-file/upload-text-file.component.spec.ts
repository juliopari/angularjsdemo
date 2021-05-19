import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTextFileComponent } from './upload-text-file.component';

describe('UploadTextFileComponent', () => {
  let component: UploadTextFileComponent;
  let fixture: ComponentFixture<UploadTextFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadTextFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTextFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
