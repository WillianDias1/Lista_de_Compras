
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list-component/item-list-component.component';
import { MercadoComponent } from './mercado/mercado.component';
import { ItemComponent } from './item-component/item-component.component';

export const routes: Routes = [

  { path: 'item', component: ItemComponent },

  // Rota para o componente de lista de itens
  { path: 'items', component: ItemListComponent },

  // Rota para o formulário de adição de itens
  { path: 'mercado', component: MercadoComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
