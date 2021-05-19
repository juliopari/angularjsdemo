import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-transaction-detail-emp',
  templateUrl: './transaction-detail-emp.component.html',
  styleUrls: ['./transaction-detail-emp.component.scss']
})
export class TransactionDetailEmpComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  mainForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder) {
    this.mainForm = this.formBuilder.group({
      dateType: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      service: ["", [Validators.required]],
      RUCofCommerce: [""],
      debtorCode: [""],
      operationNumber: [""]
    });

    this.setTitle()
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Reportes' }, { label: 'Detalle de transacciones (Emp)', active: true }];
  }

  setTitle(): void {
    this.titleService.setTitle(
      "RyS | Reportes > Detalle de transacciones (Emp)"
    );
  }

}
