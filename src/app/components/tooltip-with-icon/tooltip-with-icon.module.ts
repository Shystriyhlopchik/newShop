import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipWithIconComponent } from './tooltip-with-icon.component';
import { IconModule } from '../icon/icon.module';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [TooltipWithIconComponent],
  imports: [CommonModule, IconModule, TooltipModule],
  exports: [TooltipWithIconComponent],
})
export class TooltipWithIconModule {}
