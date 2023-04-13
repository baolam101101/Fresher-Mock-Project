import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Dropdown {
  label: string;
  value: number | string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input()
  title!: string;

  @Input()
  options: Dropdown[] = [];

  @Output()
  onSelect = new EventEmitter();

  showOptional = false;
}
