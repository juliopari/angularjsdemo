import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reconciliation-detail',
  templateUrl: './reconciliation-detail.component.html',
  styleUrls: ['./reconciliation-detail.component.scss']
})
export class ReconciliationDetailComponent implements OnInit {
  title: string = 'Detalle de conciliación';
  // bread crumb items
  breadCrumbItems: Array<{}>;
  mainForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder) {
    this.mainForm = this.formBuilder.group({
      dateType: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      commercialCode: [""],
      RUCofCommerce: [""],
      debtorCode: [""],
      operationNumber: [""],
      companyRUC: [""],
      reconciliationStatus: [""]
    });

    this.setTitle()
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Reportes' }, { label: this.title, active: true }];
  }

  setTitle(): void {
    this.titleService.setTitle(
      "RyS | Reportes > " + this.title
    );
  }

}
