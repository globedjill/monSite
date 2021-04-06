import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout'


const MODULES_LAYOUT = [
  CommonModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  MaterialModule
]

@NgModule({
  declarations: [],
  imports: [MODULES_LAYOUT,],
  exports: [MODULES_LAYOUT]
})
export class LayoutModule { }
