import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-new-service",
  templateUrl: "./new-service.component.html",
  styleUrls: ["./new-service.component.scss"],
})
export class NewServiceComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  //CamelCase forever
  basicInformationForm: FormGroup;
  collectionMethodForm: FormGroup;
  commissionsForm: FormGroup;
  paymentAccountForm: FormGroup;
  emailsForm: FormGroup;
  searchCompany = false;
  stepTitles = {
    0: "Información básica",
    1: "Modalidad de recaudación",
    2: "Comisiones",
    3: "Cuenta de abono",
    4: "Correos electrónicos"
  }
  currentStepTitle: ""

  constructor(private formBuilder: FormBuilder) {
    this.basicInformationForm = this.formBuilder.group(
      {
        companyName: ["", [Validators.required, Validators.maxLength(20)]],
        serviceName: ["", [Validators.required, Validators.maxLength(20)]],
        debtorCode: ["", [Validators.required, Validators.maxLength(20)]],
        assignNumberOfDCCharacters: [""],
        numberOfDCCharacters: [-1, [Validators.max(20)]]
      }
    );
    this.onChanges();

    this.collectionMethodForm = this.formBuilder.group(
      {
        collectionMethod: ["", [Validators.required]],
        setUpAmountsRange: [null],
        rangeStart: [null],
        rangeEnd: [null],
        forceToPayOlderFee: [null],
        allowToPayOverdueFees: [null],
        allowPartialPayments: [null]
      }
    );
  }

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Afiliación de servicios" },
      { label: "Nuevo servicio", active: true },
    ];
  }

  onChanges(): void {
    this.basicInformationForm.get('assignNumberOfDCCharacters').valueChanges.subscribe(val => {
      if(val !== 'Y'){
        this.basicInformationForm.patchValue({
          numberOfDCCharacters: -1
        });
      }else{
        this.basicInformationForm.patchValue({
          numberOfDCCharacters: 5
        });
      }
    });
  }

  enterStepWith(num): void{
    this.currentStepTitle = this.stepTitles[num];
  }
}
