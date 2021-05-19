import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-text-file',
  templateUrl: './upload-text-file.component.html',
  styleUrls: ['./upload-text-file.component.scss']
})
export class UploadTextFileComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  mainForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder) {
    this.mainForm = this.formBuilder.group({
      textFile: ["", [Validators.required]]
    });

    this.setTitle()
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Gestión de base de recaudación' }, { label: 'Cargar archivo de texto', active: true }];
  }

  setTitle(): void {
    this.titleService.setTitle(
      "RyS | Gestión de base de recaudación > Cargar archivo de texto"
    );
  }

}
