import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item-component/item-component.component';
import { ItemListComponent } from './item-list-component/item-list-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { GroupComponentComponent } from './group-component/group-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ItemFormComponent } from './item-form-component/item-form-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importando os módulos de formulários


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    GroupComponentComponent,
    FooterComponentComponent,
    ItemListComponent,
    ItemComponent, // Declarando o ItemComponent
    ItemFormComponent // Declarando o ItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
