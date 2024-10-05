import { Component } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.css']
})
export class MercadoComponent {
  newItem: Item = {
    id: 0,
    name: '',
    imageFile: null,
    price: 0,
    description: '',
    imagePreview: '',
    purchased: false
  };

  items: Item[] = [];

  // Função para adicionar o item à lista
  addItem() {
    if (this.newItem.name && this.newItem.imageFile && this.newItem.price > 0 && this.newItem.description) {
      this.newItem.id = this.items.length + 1;
      this.items.push({ ...this.newItem });
      this.clearForm();
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  // Obter itens não comprados
  getUnpurchasedItems(): Item[] {
    return this.items.filter(item => !item.purchased);
  }

  // Obter itens comprados
  getPurchasedItems(): Item[] {
    return this.items.filter(item => item.purchased);
  }

  // Alterar o status de "comprado" do item
  togglePurchased(item: Item) {
    item.purchased = !item.purchased;
  }

  // Editar o item
  editItem(item: Item) {
    this.newItem = { ...item };
    this.removeItem(item);  // Remove o item da lista enquanto é editado
  }

  // Excluir o item da lista
  removeItem(item: Item) {
    this.items = this.items.filter(i => i.id !== item.id);
  }

  // Processar o arquivo de imagem e gerar a previsualização
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.newItem.imageFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.newItem.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Limpar o formulário
  clearForm() {
    this.newItem = {
      id: 0,
      name: '',
      imageFile: null,
      price: 0,
      description: '',
      imagePreview: '',
      purchased: false
    };
  }
}
