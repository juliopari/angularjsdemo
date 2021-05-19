import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-commission-report',
  templateUrl: './commission-report.component.html',
  styleUrls: ['./commission-report.component.scss']
})
export class CommissionReportComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  mainForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder) {
    this.mainForm = this.formBuilder.group({
      companyRUC: [""],
      companyStatus: [""]
    });

    this.setTitle()
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Reportes' }, { label: 'Reporte de comisiones', active: true }];
  }

  setTitle(): void {
    this.titleService.setTitle(
      "RyS | Reportes > Reporte de comisiones"
    );
  }

}
