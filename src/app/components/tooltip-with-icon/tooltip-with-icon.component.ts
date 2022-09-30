import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-with-icon',
  template: ` <p>tooltip-with-icon works!</p>
    <app-tooltip></app-tooltip> <app-icon></app-icon>`,
  styles: [],
})
export class TooltipWithIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
