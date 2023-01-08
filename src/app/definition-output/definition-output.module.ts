import { DEFINITION_OUTPUT_STATE_NAME } from './state/definition-output.selectors';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefinitionOutputComponent } from './ui/definition-output/definition-output.component';
import { definitionOutputReducer } from './state/definition-output.reducers';



@NgModule({
  declarations: [DefinitionOutputComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(DEFINITION_OUTPUT_STATE_NAME, definitionOutputReducer)
  ],
  exports: [DefinitionOutputComponent]
})
export class DefinitionOutputModule { }
