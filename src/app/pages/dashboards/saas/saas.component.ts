import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { earningLineChart, salesAnalyticsDonutChart, ChatData } from './data';
import { ChartType, ChatMessage } from './saas.model';

@Component({
  selector: 'app-saas',
  templateUrl: './saas.component.html',
  styleUrls: ['./saas.component.scss']
})
/**
 * Saas-dashboard component
 */
export class SaasComponent implements OnInit, AfterViewInit {

  @ViewChild('scrollRef') scrollRef;

  // bread crumb items
  breadCrumbItems: Array<{}>;

  earningLineChart: ChartType;
  salesAnalyticsDonutChart: ChartType;
  ChatData: ChatMessage[];

  formData: FormGroup;

  // Form submit
  chatSubmit: boolean;

  constructor(public formBuilder: FormBuilder) { }
  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Saas', active: true }];

    this._fetchData();

    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

  }

  /**
   * Save the message in chat
   */
  messageSave() {
    const message = this.formData.get('message').value;
    const currentDate = new Date();
    if (this.formData.valid && message) {
      // Message Push in Chat
      this.ChatData.push({
        align: 'right',
        name: 'Henry Wells',
        message,
        time: currentDate.getHours() + ':' + currentDate.getMinutes()
      });
      this.onListScroll();
      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null
      });
    }

    this.chatSubmit = true;
  }

  private _fetchData() {
    this.earningLineChart = earningLineChart;
    this.salesAnalyticsDonutChart = salesAnalyticsDonutChart;
    this.ChatData = ChatData;

  }

  ngAfterViewInit() {
    this.scrollRef.SimpleBar.getScrollElement().scrollTop = 500;
  }

  onListScroll() {
    if (this.scrollRef !== undefined) {
      setTimeout(() => {
        this.scrollRef.SimpleBar.getScrollElement().scrollTop =
          this.scrollRef.SimpleBar.getScrollElement().scrollHeight + 1500;
      }, 500);
    }
  }

}
