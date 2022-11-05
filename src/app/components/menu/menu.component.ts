import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div class="menu__content">
      <div>one</div>
      <div>two</div>
    </div>
  `,
  styles: [
    `
      .menu__content {
        left: 0;
        padding-top: 0.25rem;
        position: absolute;
        top: 100%;

        background-color: #fff;
        z-index: 9999;
      }
    `,
  ],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
