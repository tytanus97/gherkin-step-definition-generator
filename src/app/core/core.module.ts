import { FeatureSelectModule } from './../feature-select/feature-select.module';
import { DefinitionOutputModule } from './../definition-output/definition-output.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorLayoutContainerComponent } from './ui/generator-layout-container/generator-layout-container.component';
import { BannerComponent } from './ui/banner/banner.component';
import { SharedModule } from '@shared/shared.module';
import { GeneratorMenuModule } from './../generator-menu/generator-menu.module';



@NgModule({
  declarations: [BannerComponent, GeneratorLayoutContainerComponent],
  imports: [
    CommonModule,
    DefinitionOutputModule,
    GeneratorMenuModule,
    FeatureSelectModule,
    SharedModule,
  ],
  exports: [GeneratorLayoutContainerComponent]
})
export class CoreModule { }
