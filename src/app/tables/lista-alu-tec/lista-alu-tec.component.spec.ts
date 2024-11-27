import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAluTecComponent } from './lista-alu-tec.component';

describe('ListaAluTecComponent', () => {
  let component: ListaAluTecComponent;
  let fixture: ComponentFixture<ListaAluTecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAluTecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAluTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
