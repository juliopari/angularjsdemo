import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-generate-text-file',
  templateUrl: './generate-text-file.component.html',
  styleUrls: ['./generate-text-file.component.scss']
})
export class GenerateTextFileComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  mainForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder) {
    this.mainForm = this.formBuilder.group({
      service: ["", [Validators.required]],
      uploadDate: ["", [Validators.required]],
      loadType: ["", [Validators.required]],
      excelTemplate: ["", [Validators.required]],
    });

    this.setTitle()
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Gestión de base de recaudación' }, { label: 'Generar archivo de texto', active: true }];
  }

  setTitle(): void {
    this.titleService.setTitle(
      "RyS | Gestión de base de recaudación > Generar archivo de texto"
    );
  }

}
