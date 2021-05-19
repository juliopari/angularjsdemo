import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  title = 'Modificar servicio'
  // bread crumb items
  breadCrumbItems: Array<{}>;
  companyServices: any [] = [];
  @ViewChild('content') content;
  
  constructor(private modalService: NgbModal, private titleService: Title) { 
    this.setTitle()
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Afiliación de servicios' }, { label: this.title, active: true }];
  }

  getServicesByCompany(code){
    this.companyServices = [];
    this.companyServices.push({ id: 1, name: "Pensiones"});
    this.companyServices.push({ id: 2, name: "Matrículas"});
    this.companyServices.push({ id: 3, name: "Librería"});
    this.companyServices.push({ id: 4, name: "Otros rubros"});
  }
  openModal() {
    this.modalService.open(this.content, { centered: true });
  }

  setTitle(): void {
    this.titleService.setTitle(
      "RyS | Afiliación de servicios > " + this.title
    );
  }
}
