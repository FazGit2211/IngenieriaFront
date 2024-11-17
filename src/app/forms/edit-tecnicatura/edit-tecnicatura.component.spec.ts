import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTecnicaturaComponent } from './edit-tecnicatura.component';

describe('EditTecnicaturaComponent', () => {
  let component: EditTecnicaturaComponent;
  let fixture: ComponentFixture<EditTecnicaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTecnicaturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTecnicaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
