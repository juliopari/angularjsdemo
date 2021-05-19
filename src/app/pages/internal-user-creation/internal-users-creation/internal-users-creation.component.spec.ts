import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalUsersCreationComponent } from './internal-users-creation.component';

describe('InternalUsersCreationComponent', () => {
  let component: InternalUsersCreationComponent;
  let fixture: ComponentFixture<InternalUsersCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalUsersCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalUsersCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
