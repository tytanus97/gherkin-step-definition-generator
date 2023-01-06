import { QuillModule } from 'ngx-quill';
import { FEATURE_STATE_NAME } from './state/feature.selectors';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartScreenComponent } from './ui/start-screen/start-screen.component';
import { BannerComponent } from './ui/banner/banner.component';
import { FeatureSelectComponent } from './ui/feature-select/feature-select.component';
import { GeneratorLayoutContainerComponent } from './ui/generator-layout-container/generator-layout-container.component';
import { DefinitionOutputComponent } from './ui/definition-output/definition-output.component';
import { GeneratorActionsComponent } from './ui/generator-actions/generator-actions.component';
import { SharedModule } from '../shared/shared.module';
import { featureReducer } from './state/feature.reducers';
import { FeatureContentComponent } from './ui/feature-content/feature-content.component';
import { HighlightPipe } from './utils/highlight.pipe';

@NgModule({
  declarations: [
    StartScreenComponent,
    BannerComponent,
    FeatureSelectComponent,
    GeneratorLayoutContainerComponent,
    DefinitionOutputComponent,
    GeneratorActionsComponent,
    FeatureContentComponent,
    HighlightPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature(FEATURE_STATE_NAME, featureReducer),
    QuillModule
  ],
  exports: [StartScreenComponent]
})
export class StartScreenModule {
}
