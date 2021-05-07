import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewServiceComponent } from "./new-service/new-service.component";

const routes: Routes = [
    {
        path: 'new-service',
        component: NewServiceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiceAffiliationRoutingModule {}
