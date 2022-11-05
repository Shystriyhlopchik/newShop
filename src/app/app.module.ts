import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipWithIconModule } from './components/tooltip-with-icon/tooltip-with-icon.module';
import { ButtonModule } from './components/button/button.module';
import { DropdownModule } from './components/dropdown/dropdown.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TooltipWithIconModule, ButtonModule, DropdownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
