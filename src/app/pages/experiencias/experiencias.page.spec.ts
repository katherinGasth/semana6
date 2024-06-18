import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienciasPage } from './experiencias.page';

describe('ExperienciasPage', () => {
  let component: ExperienciasPage;
  let fixture: ComponentFixture<ExperienciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
