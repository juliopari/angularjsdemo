import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionDetailEmpComponent } from "./transaction-detail-emp/transaction-detail-emp.component";
import { TransactionDetailNbzComponent } from "./transaction-detail-nbz/transaction-detail-nbz.component";
import { TradeBaseComponent } from "./trade-base/trade-base.component";
import { CommissionReportComponent } from "./commission-report/commission-report.component";
import { TransactionSummaryComponent } from "./transaction-summary/transaction-summary.component";
import { ReconciliationSummaryComponent } from "./reconciliation-summary/reconciliation-summary.component";
import { ReconciliationDetailComponent } from "./reconciliation-detail/reconciliation-detail.component";

const routes: Routes = [
  {
    path: 'transaction-detail-emp',
    component: TransactionDetailEmpComponent
  },
  {
    path: 'transaction-detail-nbz',
    component: TransactionDetailNbzComponent
  },
  {
    path: 'trade-base',
    component: TradeBaseComponent
  },
  {
    path: "commission-report",
    component: CommissionReportComponent
  },
  {
    path: 'transaction-summary',
    component: TransactionSummaryComponent
  },
  {
    path: 'reconciliation-summary',
    component: ReconciliationSummaryComponent
  },
  {
    path: "reconciliation-detail",
    component: ReconciliationDetailComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule { }
