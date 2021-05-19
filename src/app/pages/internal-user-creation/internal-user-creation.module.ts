import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalUserCreationRoutingModule } from "./internal-user-creation-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';
import { InternalUsersCreationComponent } from './internal-users-creation/internal-users-creation.component';
import { InternalUsersModificationComponent } from './internal-users-modification/internal-users-modification.component';

@NgModule({
  declarations: [InternalUsersCreationComponent, InternalUsersModificationComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    UIModule,
    InternalUserCreationRoutingModule
  ]
})
export class InternalUserCreationModule { }
