import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponent {
  @Input() item: any; // Recebe o item da lista como input
  @Output() deleteItem = new EventEmitter<void>(); // Emite um evento ao deletar o item
  @Output() markAsBought = new EventEmitter<void>(); // Emite um evento ao marcar como comprado
  @Output() markAsUnBought = new EventEmitter<void>(); // Emite um evento ao marcar como descomprado
  @Output() editItem = new EventEmitter<void>(); // Emite um evento ao editar o item

  isEditing = false; // Flag para saber se o item está sendo editado
  editedValue: string = ''; // Valor editado do item

  ngOnInit() {
    this.editedValue = this.item.name; // Inicializa com o nome do item
  }

  toggleEdit() {
    this.isEditing = !this.isEditing; // Alterna entre edição e visualização
    this.editedValue = this.item.name;
  }

  saveEdit() {
    if (this.editedValue.trim()) { // Verifica se o valor editado não é vazio
      this.item.name = this.editedValue;
      this.isEditing = false;
      this.editItem.emit(); // Emite o evento de edição
    }
  }

  markBought() {
    this.markAsBought.emit(); // Emite o evento para marcar como comprado
  }

  markUnBought() {
    this.markAsUnBought.emit(); // Emite o evento para marcar como Descomprado
  }

  delete() {
    this.deleteItem.emit(); // Emite o evento para deletar o item
  }
}
