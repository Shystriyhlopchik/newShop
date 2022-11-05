import { Component, Input } from '@angular/core';
import { Size, Variant } from './enums';

@Component({
  selector: 'app-button',
  template: `
    <button
      [ngClass]="class"
      [class.button_active]="isActive"
      [style.font-size.px]="sizeFont"
      [attr.disabled]="isDisabled ? '' : null"
    >
      Click me!
    </button>
  `,
  styles: [
    `
      button:hover {
        cursor: pointer;
      }
      .button_primary {
        background-color: blue;
        color: white;
        border-color: blue;
      }
      .button_accent {
        background-color: black;
        color: white;
        border-color: black;
      }
      .button_success {
        background-color: green;
        color: white;
        border-color: green;
      }
      .button_warning {
        background-color: red;
        color: white;
        border-color: red;
      }
      .button_active:hover {
        pointer-events: none;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input()
  set color(variant: Variant) {
    this.variant = variant;
  }

  @Input()
  set size(size: Size) {
    this.sizeParameter = size;
  }

  @Input()
  isDisabled = false;

  @Input()
  isActive = false;

  get class(): string {
    return this.variant === Variant.Default ? '' : 'button_' + this.variant;
  }

  get sizeFont(): Number | undefined {
    switch (this.sizeParameter) {
      case Size.Large:
        return 18;
      case Size.Small:
        return 8;
      default:
        return undefined;
    }
  }

  variant: Variant = Variant.Default;
  sizeParameter: Size = Size.Default;
}
