import { SharedModule } from './../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSelectComponent } from './ui/feature-select/feature-select.component';
import { featureReducer } from './state/feature.reducers';
import { FEATURE_STATE_NAME } from './state/feature.selectors';
import { QuillModule } from 'ngx-quill';



@NgModule({
  declarations: [FeatureSelectComponent],
  imports: [
    CommonModule,
    QuillModule,
    SharedModule,
    StoreModule.forFeature(FEATURE_STATE_NAME, featureReducer)
  ],
  exports: [FeatureSelectComponent]
})
export class FeatureSelectModule { }
