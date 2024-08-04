import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FieldModel } from '../../models/form-data.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-input-text',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './custom-input-text.component.html',
  styleUrl: './custom-input-text.component.scss',
})
export class CustomInputTextComponent {
  @Input() model!: FieldModel;
  @Input()
  set handelErrors(error:string) {
    this.fieldErrors = error
  }
  fieldErrors: string = ''
  @Output() valueChanged: EventEmitter<any> = new EventEmitter;
  data: any;

}
