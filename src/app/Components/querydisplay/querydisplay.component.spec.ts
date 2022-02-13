import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerydisplayComponent } from './querydisplay.component';

describe('QuerydisplayComponent', () => {
  let component: QuerydisplayComponent;
  let fixture: ComponentFixture<QuerydisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerydisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerydisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
