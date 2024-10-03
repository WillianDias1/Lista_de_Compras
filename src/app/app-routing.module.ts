
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list-component/item-list-component.component';
import { ItemFormComponent } from './item-form-component/item-form-component.component';
import { ItemComponent } from './item-component/item-component.component';

export const routes: Routes = [

  { path: 'item', component: ItemComponent },

  // Rota para o componente de lista de itens
  { path: 'items', component: ItemListComponent },

  // Rota para o formulário de adição de itens
  { path: 'add-item', component: ItemFormComponent },

  // Rota para a edição de um item (usando parâmetro id)
  { path: 'edit-item/:id', component: ItemFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
