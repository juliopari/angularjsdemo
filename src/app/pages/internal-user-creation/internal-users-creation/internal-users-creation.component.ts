import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-internal-users-creation',
  templateUrl: './internal-users-creation.component.html',
  styleUrls: ['./internal-users-creation.component.scss']
})
export class InternalUsersCreationComponent implements OnInit {
  title = 'Creación de usuarios internos'
  // bread crumb items
  breadCrumbItems: Array<{}>;
  mainForm: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder) {
    this.mainForm = this.formBuilder.group({
      profile: ["", [Validators.required]],
      username: ["", [Validators.required]]
    });

    this.setTitle()
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Creación de usuarios internos' }, { label: this.title, active: true }];
  }

  setTitle(): void {
    this.titleService.setTitle(
      "RyS | Creación de usuarios internos > " + this.title
    );
  }

}
