import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from "./reports-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';
import { TransactionDetailEmpComponent } from './transaction-detail-emp/transaction-detail-emp.component';
import { TransactionDetailNbzComponent } from './transaction-detail-nbz/transaction-detail-nbz.component';
import { TradeBaseComponent } from './trade-base/trade-base.component';
import { CommissionReportComponent } from './commission-report/commission-report.component';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';
import { ReconciliationSummaryComponent } from './reconciliation-summary/reconciliation-summary.component';
import { ReconciliationDetailComponent } from './reconciliation-detail/reconciliation-detail.component';

@NgModule({
  declarations: [TransactionDetailEmpComponent, TransactionDetailNbzComponent, TradeBaseComponent, CommissionReportComponent, TransactionSummaryComponent, ReconciliationSummaryComponent, ReconciliationDetailComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    UIModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
