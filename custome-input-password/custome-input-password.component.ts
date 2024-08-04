import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FieldModel } from '../../models/form-data.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custome-input-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './custome-input-password.component.html',
  styleUrl: './custome-input-password.component.scss'
})
export class CustomeInputPasswordComponent {
  @Input() model!: FieldModel;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter;
  data:any
}
