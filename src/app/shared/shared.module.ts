import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePickerComponent } from './ui/file-picker/file-picker.component';

@NgModule({
  declarations: [FilePickerComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FilePickerComponent]
})
export class SharedModule { }
