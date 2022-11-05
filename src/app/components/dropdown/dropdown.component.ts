import { Component, Input, OnInit } from '@angular/core';
import { Trigger } from './enums';

@Component({
  selector: 'app-dropdown',
  template: `
    <div class="dropdown">
      <app-button (click)="openDropdown($event)">dropdown</app-button>
      <app-menu [style.display]="isOpen ? '' : 'none'"></app-menu>
    </div>
  `,
  styles: [
    `
      .dropdown {
        position: relative;
      }
      app-menu {
        display: none;
      }
      .dropdown:hover app-menu {
        display: block;
      }
    `,
  ],
})
export class DropdownComponent implements OnInit {
  @Input()
  trigger: Trigger = Trigger.Hover;

  isOpen = false;

  ngOnInit(): void {
    if (this.trigger === Trigger.Hover) {
      this.isOpen = true;
    }
  }

  openDropdown(event: MouseEvent): void {
    if (event.type === this.trigger) {
      this.isOpen = !this.isOpen;
    }
  }
}
