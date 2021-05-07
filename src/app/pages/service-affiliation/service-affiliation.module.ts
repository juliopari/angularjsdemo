import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';

import { ServiceAffiliationRoutingModule } from './service-affiliation-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular';

import { NewServiceComponent } from './new-service/new-service.component';


@NgModule({
  declarations: [NewServiceComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArchwizardModule,
    ServiceAffiliationRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule
  ]
})
export class ServiceAffiliationModule { }
