import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css'],
})
export class Component3Component implements OnInit {
  value = '';

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.valueService.value.subscribe((value) => (this.value = value));
  }
}
