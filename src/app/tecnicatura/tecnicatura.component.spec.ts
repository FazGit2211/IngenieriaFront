import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicaturaComponent } from './tecnicatura.component';

describe('TecnicaturaComponent', () => {
  let component: TecnicaturaComponent;
  let fixture: ComponentFixture<TecnicaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnicaturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnicaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
