import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalUsersCreationComponent } from "./internal-users-creation/internal-users-creation.component";
import { InternalUsersModificationComponent } from "./internal-users-modification/internal-users-modification.component";

const routes: Routes = [
  {
    path: 'internal-users-creation',
    component: InternalUsersCreationComponent
  },
  {
    path: 'internal-users-modification',
    component: InternalUsersModificationComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InternalUserCreationRoutingModule { }
