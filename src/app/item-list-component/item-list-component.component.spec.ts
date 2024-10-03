import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponentComponent } from './item-list-component.component';

describe('ItemListComponentComponent', () => {
  let component: ItemListComponentComponent;
  let fixture: ComponentFixture<ItemListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
