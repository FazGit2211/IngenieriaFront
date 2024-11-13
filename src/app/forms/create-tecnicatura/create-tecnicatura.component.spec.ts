import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTecnicaturaComponent } from './create-tecnicatura.component';

describe('CreateTecnicaturaComponent', () => {
  let component: CreateTecnicaturaComponent;
  let fixture: ComponentFixture<CreateTecnicaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTecnicaturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTecnicaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
