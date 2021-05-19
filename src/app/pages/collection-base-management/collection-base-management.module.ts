import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionBaseManagementRoutingModule } from "./collection-base-management-routing.module";

import { UIModule } from '../../shared/ui/ui.module';

import { GenerateTextFileComponent } from './generate-text-file/generate-text-file.component';
import { UploadTextFileComponent } from './upload-text-file/upload-text-file.component';

@NgModule({
  declarations: [GenerateTextFileComponent, UploadTextFileComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    CollectionBaseManagementRoutingModule,
    UIModule
  ]
})
export class CollectionBaseManagementModule { }
