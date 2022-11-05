import { Component } from '@angular/core';
import { Size, Variant } from './components/button/enums';
import { Trigger } from './components/dropdown/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'newShop';
  readonly Variant = Variant;
  readonly Size = Size;
  readonly Trigger = Trigger;
}
