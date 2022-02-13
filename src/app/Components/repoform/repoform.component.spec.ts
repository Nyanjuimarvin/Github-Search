import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoformComponent } from './repoform.component';

describe('RepoformComponent', () => {
  let component: RepoformComponent;
  let fixture: ComponentFixture<RepoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
