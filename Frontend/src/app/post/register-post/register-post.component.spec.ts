import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPostComponent } from './register-post.component';

describe('RegisterPostComponent', () => {
  let component: RegisterPostComponent;
  let fixture: ComponentFixture<RegisterPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
