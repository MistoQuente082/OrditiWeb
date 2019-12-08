import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAmbulanteFormComponent } from './input-ambulante-form.component';

describe('InputAmbulanteFormComponent', () => {
  let component: InputAmbulanteFormComponent;
  let fixture: ComponentFixture<InputAmbulanteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAmbulanteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAmbulanteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
