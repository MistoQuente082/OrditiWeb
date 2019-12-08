import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAmbulanteComponent } from './perfil-ambulante.component';

describe('PerfilAmbulanteComponent', () => {
  let component: PerfilAmbulanteComponent;
  let fixture: ComponentFixture<PerfilAmbulanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAmbulanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAmbulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
