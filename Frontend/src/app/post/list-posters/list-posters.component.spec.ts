import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostersComponent } from './list-posters.component';

describe('ListPostersComponent', () => {
  let component: ListPostersComponent;
  let fixture: ComponentFixture<ListPostersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
