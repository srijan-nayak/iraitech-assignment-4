import { Component } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  constructor(private valueService: ValueService) {}

  inputValue = '';

  onChange() {
    this.valueService.updateValue(this.inputValue);
  }
}
