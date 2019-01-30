import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAddComponent } from './produto-add.component';

describe('ProdutoAddComponent', () => {
  let component: ProdutoAddComponent;
  let fixture: ComponentFixture<ProdutoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
