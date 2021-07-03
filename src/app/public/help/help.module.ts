import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { RouterModule } from '@angular/router';
import { HELP_ROUTE } from './help.route';

@NgModule({
  declarations: [HelpComponent],
  imports: [CommonModule, RouterModule.forChild([HELP_ROUTE])]
})
export class HelpModule {}
