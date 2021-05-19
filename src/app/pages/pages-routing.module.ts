import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { DefaultComponent } from './dashboards/default/default.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'service-affiliation', loadChildren: () => import('./service-affiliation/service-affiliation.module').then(m => m.ServiceAffiliationModule) },
  { path: 'collection-base-management', loadChildren: () => import('./collection-base-management/collection-base-management.module').then(m => m.CollectionBaseManagementModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  { path: 'internal-user-creation', loadChildren: () => import('./internal-user-creation/internal-user-creation.module').then(m => m.InternalUserCreationModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
