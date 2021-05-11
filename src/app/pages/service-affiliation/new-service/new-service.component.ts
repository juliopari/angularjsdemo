import { Title } from "@angular/platform-browser";
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder, FormArray } from "@angular/forms";

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
    4: "Correos electrónicos",
    5: "Confirmación"
  };
  currentStepTitle: "";

  constructor(private titleService: Title, private formBuilder: FormBuilder) {
    this.basicInformationForm = this.formBuilder.group({
      companyName: ["", [Validators.required, Validators.maxLength(20)]],
      serviceName: ["", [Validators.required, Validators.maxLength(20)]],
      debtorCode: ["", [Validators.required, Validators.maxLength(20)]],
      assignNumberOfDCCharacters: [""],
      numberOfDCCharacters: [-1, [Validators.max(20)]],
    });

    this.collectionMethodForm = this.formBuilder.group({
      collectionMethod: ["", [Validators.required]],
      setUpAmountsRange: [""],
      rangeStart: [null],
      rangeEnd: [null],
      forceToPayOlderFee: [""],
      allowToPayOverdueFees: [""],
      allowPartialPayments: [""],
    });

    this.commissionsForm = this.formBuilder.group({
      typeOfCommission: ["", [Validators.required]],
      amountByCompany: [null],
      amountByCustomer: [null],
      percentageByCompany: [null],
      percentageByCustomer: [null],
      ranges: this.formBuilder.array([this.formBuilder.group({rangeStart: [0], rangeEnd: [999999], commissionToTheCompany: [null]})]),
      commissionToPayToTheMER: ["", [Validators.required]],
      percentageForSuperAgent: ["", [Validators.required]],
      customPctForSuperAgent: [""]
    });
    
    this.paymentAccountForm = this.formBuilder.group({
      bank: ["", [Validators.required]],
      accountType: ["", [Validators.required]],
      accountNumber: ["", [Validators.required]],
      interbankAccountNumber: ["", [Validators.required]]
    });

    this.emailsForm = this.formBuilder.group({
      emailsForSendingResponseFile: this.formBuilder.array([]),
      emailsForTheConfirmationOfTheLoad: this.formBuilder.array([]),
      emailsToSendCredentials: this.formBuilder.array([]),
    });

    this.onChanges();
  }

  get tieredCommRanges() {
    return this.commissionsForm.get('ranges') as FormArray;
  }

  get tieredCommRangesLength() {
    return (this.commissionsForm.get('ranges') as FormArray).length;
  }

  get emailsForSendingResponseFile(){
    return this.emailsForm.get('emailsForSendingResponseFile') as FormArray;
  }

  get emailsForTheConfirmationOfTheLoad(){
    return this.emailsForm.get('emailsForTheConfirmationOfTheLoad') as FormArray;
  }

  get emailsToSendCredentials(){
    return this.emailsForm.get('emailsToSendCredentials') as FormArray;
  }

  addEmailForSendingResponseFile(newEmail: string) {
    const found = this.emailsForSendingResponseFile.value.find(item => item.email === newEmail);
    if(found) return;
    this.emailsForSendingResponseFile.push(this.formBuilder.group({email: [newEmail]}));
  }

  deleteEmailForSendingResponseFile(index) {
    this.emailsForSendingResponseFile.removeAt(index);
  }

  addEmailForTheConfirmationOfTheLoad(newEmail: string) {
    const found = this.emailsForTheConfirmationOfTheLoad.value.find(item => item.email === newEmail);
    if(found) return;
    this.emailsForTheConfirmationOfTheLoad.push(this.formBuilder.group({email: [newEmail]}));
  }

  deleteEmailForTheConfirmationOfTheLoad(index) {
    this.emailsForTheConfirmationOfTheLoad.removeAt(index);
  }

  addEmailToSendCredentials(newEmail: string) {
    const found = this.emailsToSendCredentials.value.find(item => item.email === newEmail);
    if(found) return;
    this.emailsToSendCredentials.push(this.formBuilder.group({email: [newEmail]}));
  }

  deleteEmailToSendCredentials(index) {
    this.emailsToSendCredentials.removeAt(index);
  }

  addTieredCommRange() {
    this.tieredCommRanges.at(this.tieredCommRangesLength - 1 ).patchValue({rangeEnd: ""})
    this.tieredCommRanges.push(this.formBuilder.group({rangeStart: [0], rangeEnd: [999999], commissionToTheCompany: [null]}));
  }

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Afiliación de servicios" },
      { label: "Nuevo servicio", active: true },
    ];
  }

  onChanges(): void {
    this.basicInformationForm
      .get("assignNumberOfDCCharacters")
      .valueChanges.subscribe((val) => {
        if (val !== "Y") {
          this.basicInformationForm.patchValue({
            numberOfDCCharacters: -1,
          });
        } else {
          this.basicInformationForm.patchValue({
            numberOfDCCharacters: 5,
          });
        }
      });

    this.collectionMethodForm
      .get("collectionMethod")
      .valueChanges.subscribe((val) => {
        if (val === "C") {
          this.collectionMethodForm.patchValue({
            forceToPayOlderFee: "",
            allowToPayOverdueFees: "",
            allowPartialPayments: "",
          });
        } else {
          this.collectionMethodForm.patchValue({
            setUpAmountsRange: "",
            rangeStart: null,
            rangeEnd: null,
          });
        }
      });

    this.commissionsForm
      .get("typeOfCommission")
      .valueChanges.subscribe((val) => {
        switch (val) {
          case "F":
            this.commissionsForm.patchValue({
              amountByCompany: null,
              amountByCustomer: null,
            });
            break;
          case "P":
            this.commissionsForm.patchValue({
              percentageByCompany: null,
              percentageByCustomer: null,
            });
            break;
        }      
        this.commissionsForm.patchValue({
          commissionToPayToTheMER: "",
          percentageForSuperAgent: "",
          customPctForSuperAgent: ""
        });
      });

      this.paymentAccountForm
      .get("bank")
      .valueChanges.subscribe((val) => {
        this.paymentAccountForm.patchValue({
          accountType: "",
          accountNumber: "",
          interbankAccountNumber: ""
        });   
      });
      this.paymentAccountForm
      .get("accountType")
      .valueChanges.subscribe((val) => {
        this.paymentAccountForm.patchValue({
          accountNumber: "",
          interbankAccountNumber: ""
        });   
      });
  }

  enterStepWith(num): void {
    this.currentStepTitle = this.stepTitles[num];
    this.titleService.setTitle(
      "RyS | Nuevo Servicio > " + this.currentStepTitle
    );
  }
}
