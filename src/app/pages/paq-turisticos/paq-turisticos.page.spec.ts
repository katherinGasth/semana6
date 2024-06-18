import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaqTuristicosPage } from './paq-turisticos.page';

describe('PaqTuristicosPage', () => {
  let component: PaqTuristicosPage;
  let fixture: ComponentFixture<PaqTuristicosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqTuristicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
