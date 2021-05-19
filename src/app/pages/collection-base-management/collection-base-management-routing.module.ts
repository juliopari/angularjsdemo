import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateTextFileComponent } from "./generate-text-file/generate-text-file.component";
import { UploadTextFileComponent } from "./upload-text-file/upload-text-file.component";

const routes: Routes = [
  {
    path: 'generate-text-file',
    component: GenerateTextFileComponent
  },
  {
    path: 'upload-text-file',
    component: UploadTextFileComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CollectionBaseManagementRoutingModule { }
