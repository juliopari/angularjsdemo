import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-trade-base',
  templateUrl: './trade-base.component.html',
  styleUrls: ['./trade-base.component.scss']
})
export class TradeBaseComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  mainForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder) {
    this.mainForm = this.formBuilder.group({
      dateType: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      tradeStatus: [""],
      RUCofCommerce: [""],
      commercialCode: [""]
    });

    this.setTitle()
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Reportes' }, { label: 'Base de comercios', active: true }];
  }

  setTitle(): void {
    this.titleService.setTitle(
      "RyS | Reportes > Base de comercios"
    );
  }

}
