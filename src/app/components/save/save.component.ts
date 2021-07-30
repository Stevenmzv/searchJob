import { ServicioService } from './../../servicio.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent {

  @ViewChild('formSave') formSave: NgForm;

  constructor(private servicio: ServicioService) { }

  guardarDatos: DataForm[] = [];
  category: string[] = ['category 5', 'category 1', 'category 3', 'category 2'];

  save(formsave: NgForm): void {
    this.guardarDatos.push(formsave.value);
    this.servicio.setData(formsave.value);
    this.formSave.resetForm();
  }
}

export interface DataForm {
  name: string;
  location: string;
  category: string;
}
