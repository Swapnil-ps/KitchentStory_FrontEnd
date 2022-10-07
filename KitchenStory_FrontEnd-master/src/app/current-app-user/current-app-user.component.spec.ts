import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAppUserComponent } from './current-app-user.component';

describe('CurrentAppUserComponent', () => {
  let component: CurrentAppUserComponent;
  let fixture: ComponentFixture<CurrentAppUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentAppUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentAppUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
