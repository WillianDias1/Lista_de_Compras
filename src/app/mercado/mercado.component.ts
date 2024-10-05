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
    quantity: 1 // Novo campo para quantidade
  };

  items: Item[] = [];
  cartItems: Item[] = []; // Array para armazenar os itens do carrinho

  // Adicionar o item à lista
  addItem() {
    if (this.newItem.name && this.newItem.imageFile && this.newItem.price > 0 && this.newItem.description && this.newItem.quantity > 0) {
      this.newItem.id = this.items.length + 1;
      this.items.push({ ...this.newItem });
      this.clearForm();
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  // Editar o item
  editItem(item: Item) {
    this.newItem = { ...item };
    this.removeItem(item); // Remove o item da lista enquanto é editado
  }

  // Excluir o item da lista
  removeItem(item: Item) {
    this.items = this.items.filter(i => i.id !== item.id);
  }

  // Adicionar item ao carrinho
  addToCart(item: Item) {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity; // Incrementa a quantidade se já estiver no carrinho
    } else {
      this.cartItems.push({ ...item });
    }
  }
// Método para comprar item individualmente
purchaseItems(cartItem: Item) {
  if (!cartItem) {
    alert('Selecione um item para comprar!');
    return;
  }

  // Aqui você pode adicionar a lógica para processar o pagamento ou finalização da compra
  // Por exemplo, você pode chamar um serviço que faz a requisição para o backend
  alert(`Compra do item ${cartItem.name} realizada com sucesso!`);

  // Remover o item do carrinho após a compra
  this.removeFromCart(cartItem);
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
      quantity: 1 // Reiniciar quantidade ao limpar o formulário
    };
  }

  // Excluir item do carrinho
  removeFromCart(cartItem: Item) {
    this.cartItems = this.cartItems.filter(item => item.id !== cartItem.id);
  }

}
