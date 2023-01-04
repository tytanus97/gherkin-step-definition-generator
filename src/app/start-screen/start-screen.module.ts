import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartScreenComponent } from './ui/start-screen/start-screen.component';
import { BannerComponent } from './ui/banner/banner.component';

@NgModule({
  declarations: [StartScreenComponent, BannerComponent],
  imports: [CommonModule],
})
export class StartScreenModule {}
