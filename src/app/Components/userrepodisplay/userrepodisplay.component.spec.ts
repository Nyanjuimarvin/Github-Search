import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrepodisplayComponent } from './userrepodisplay.component';

describe('UserrepodisplayComponent', () => {
  let component: UserrepodisplayComponent;
  let fixture: ComponentFixture<UserrepodisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserrepodisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrepodisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
