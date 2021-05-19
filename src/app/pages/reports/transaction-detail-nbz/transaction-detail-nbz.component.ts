import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-transaction-detail-nbz',
  templateUrl: './transaction-detail-nbz.component.html',
  styleUrls: ['./transaction-detail-nbz.component.scss']
})
export class TransactionDetailNbzComponent implements OnInit {

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
      companyRUC: [""]
    });

    this.setTitle()
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Reportes' }, { label: 'Detalle de transacciones (NBZ)', active: true }];
  }

  setTitle(): void {
    this.titleService.setTitle(
      "RyS | Reportes > Detalle de transacciones (NBZ)"
    );
  }
}
