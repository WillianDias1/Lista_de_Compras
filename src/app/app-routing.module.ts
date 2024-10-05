
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercadoComponent } from './mercado/mercado.component';

export const routes: Routes = [

   // Rota para o formulário de adição de itens
  { path: 'mercado', component: MercadoComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
