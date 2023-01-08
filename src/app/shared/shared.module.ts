import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePickerComponent } from './ui/file-picker/file-picker.component';
import { HighlightPipe } from './pipes/highlight.pipe';

@NgModule({
  declarations: [FilePickerComponent, HighlightPipe],
  imports: [CommonModule, MaterialModule],
  providers: [],
  exports: [FilePickerComponent, HighlightPipe]
})
export class SharedModule { }
