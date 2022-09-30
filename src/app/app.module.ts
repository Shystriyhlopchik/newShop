import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TooltipWithIconModule } from './components/tooltip-with-icon/tooltip-with-icon.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TooltipWithIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
