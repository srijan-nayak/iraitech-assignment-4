import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
})
export class Component2Component implements OnInit {
  value = '';

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.valueService.value.subscribe((value) => (this.value = value));
  }
}
