import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartScreenComponent } from './ui/start-screen/start-screen.component';
import { BannerComponent } from './ui/banner/banner.component';
import { FeatureSelectComponent } from './ui/feature-select/feature-select.component';
import { GeneratorLayoutContainerComponent } from './ui/generator-layout-container/generator-layout-container.component';
import { DefinitionOutputComponent } from './ui/definition-output/definition-output.component';
import { GeneratorActionsComponent } from './ui/generator-actions/generator-actions.component';

@NgModule({
  declarations: [
    StartScreenComponent,
    BannerComponent,
    FeatureSelectComponent,
    GeneratorLayoutContainerComponent,
    DefinitionOutputComponent,
    GeneratorActionsComponent,
  ],
  imports: [CommonModule],
})
export class StartScreenModule {}
