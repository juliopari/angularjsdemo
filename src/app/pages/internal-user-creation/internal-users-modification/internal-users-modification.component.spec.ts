import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalUsersModificationComponent } from './internal-users-modification.component';

describe('InternalUsersModificationComponent', () => {
  let component: InternalUsersModificationComponent;
  let fixture: ComponentFixture<InternalUsersModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalUsersModificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalUsersModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
