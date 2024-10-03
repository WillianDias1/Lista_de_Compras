import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
  isBought: boolean;
}


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list-component.component.html',
  styleUrls: ['./item-list-component.component.css']
})
export class ItemListComponent {
  items: Item[] = [

  ];

  // Função para adicionar um item à lista
  addItem(itemName: string) {
    if (itemName.trim()) {
      const newItem = { id: this.items.length + 1, name: itemName, isBought: false };
      this.items.push(newItem);
    }
  }

  // Função para deletar um item da lista
  onDeleteItem(item: Item) {
    this.items = this.items.filter(i => i !== item);
  }

  // Função para marcar um item como comprado/não comprado
  onMarkAsBought(item: Item) {
    item.isBought = !item.isBought;
  }

  // Agrupa os itens que ainda não foram comprados
  getUnboughtItems() {
    return this.items.filter(item => !item.isBought);
  }

  // Agrupa os itens que já foram comprados
  getBoughtItems() {
    return this.items.filter(item => item.isBought);
  }
}
