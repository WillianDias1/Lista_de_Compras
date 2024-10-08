import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista_de_Compras';
  isMenuOpen = false; // Variável para controlar o estado do menu

  // Função para alternar o estado do menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
