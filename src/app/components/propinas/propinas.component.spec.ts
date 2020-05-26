import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropinasComponent } from './propinas.component';

describe('PropinasComponent', () => {
  let component: PropinasComponent;
  let fixture: ComponentFixture<PropinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

