import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    HomeComponent
  ],
})
export class HomeModule { }
