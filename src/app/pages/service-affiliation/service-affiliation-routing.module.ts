import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewServiceComponent } from "./new-service/new-service.component";
import { ServicesListComponent } from "./services-list/services-list.component";
import { UpdateServiceComponent } from "./update-service/update-service.component";

const routes: Routes = [
    {
        path: 'new-service',
        component: NewServiceComponent
    },
    {
        path: 'services-list',
        component: ServicesListComponent
    },
    {
        path: 'update-service',
        component: UpdateServiceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiceAffiliationRoutingModule {}
