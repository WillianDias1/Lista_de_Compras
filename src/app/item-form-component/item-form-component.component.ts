import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form-component.component.html',
  styleUrls: ['./item-form-component.component.css']
})
export class ItemFormComponent {
  @Input() item: any = null; // Recebe o item quando em modo de edição
  @Output() submitItem = new EventEmitter<string>(); // Emite o evento quando um item é adicionado ou editado
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializa o formulário com um campo de texto obrigatório
    this.itemForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Preenche o formulário com o nome do item caso esteja editando
    if (this.item) {
      this.itemForm.patchValue({ name: this.item.name });
    }
  }

  onSubmit() {
    if (this.itemForm.valid) {
      this.submitItem.emit(this.itemForm.value.name); // Emite o nome do item para o componente pai
      this.itemForm.reset(); // Reseta o formulário após o envio
    }
  }
}
