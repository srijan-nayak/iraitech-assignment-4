import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css'],
})
export class Component4Component implements OnInit {
  value = '';

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.valueService.value.subscribe((value) => (this.value = value));
  }
}
