import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormComponentComponent } from './item-form-component.component';

describe('ItemFormComponentComponent', () => {
  let component: ItemFormComponentComponent;
  let fixture: ComponentFixture<ItemFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
