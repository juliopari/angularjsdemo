import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reconciliation-summary',
  templateUrl: './reconciliation-summary.component.html',
  styleUrls: ['./reconciliation-summary.component.scss']
})
export class ReconciliationSummaryComponent implements OnInit {

  title: string = 'Resumen de conciliación';
  // bread crumb items
  breadCrumbItems: Array<{}>;
  mainForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder) {
    this.mainForm = this.formBuilder.group({
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]]
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
