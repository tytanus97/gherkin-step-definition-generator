import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorActionsComponent } from './ui/generator-actions/generator-actions.component';
import { GeneratorActionsCreatorService } from './utils/generatorActionsCreator.service';



@NgModule({
  declarations: [GeneratorActionsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [GeneratorActionsCreatorService],
  exports: [GeneratorActionsComponent]
})
export class GeneratorMenuModule { }
