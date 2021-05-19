import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-internal-users-modification',
  templateUrl: './internal-users-modification.component.html',
  styleUrls: ['./internal-users-modification.component.scss']
})
export class InternalUsersModificationComponent implements OnInit {

  title = 'Modificación de usuarios internos'
  // bread crumb items
  breadCrumbItems: Array<{}>;
  mainForm: FormGroup;
  searchUsername = "";
  @ViewChild('content') content;

  constructor(private modalService: NgbModal, private titleService: Title, private formBuilder: FormBuilder) {
    this.mainForm = this.formBuilder.group({
      profile: ["", [Validators.required]],
      username: ["", [Validators.required]]
    });

    this.setTitle()
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Creación de usuarios internos' }, { label: this.title, active: true }];
  }

  findUserByUsername(){

    this.mainForm.patchValue({
      profile: "perfil-" + (Math.floor(Math.random() * 5) + 2),
      username: this.searchUsername
    })
  }

  setTitle(): void {
    this.titleService.setTitle(
      "RyS | Creación de usuarios internos > " + this.title
    );
  }

  openModal() {
    this.modalService.open(this.content, { centered: true });
  }
}
