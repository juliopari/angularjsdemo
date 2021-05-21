import { Title } from "@angular/platform-browser";
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder, FormArray, AbstractControl, ValidationErrors } from "@angular/forms";
import { ServiceAffiliationService } from "src/app/core/services/service-affiliation.service";
import { ModalityService } from "src/app/core/services/modality.service";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { CommissionTypeService } from "src/app/core/services/commission-type.service";
import { BankService } from "src/app/core/services/bank.service";
import { AccountTypeService } from "src/app/core/services/account-type.service";
import { EmailTypeService } from "src/app/core/services/email-type.service";

@Component({
  selector: "app-new-service",
  templateUrl: "./new-service.component.html",
  styleUrls: ["./new-service.component.scss"],
})
export class NewServiceComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  newServiceBtnLoading = false;
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
    5: "Confirmación",
  };
  currentStepTitle: "";
  modalities: any = null;
  commissionTypes : any = null;
  banks: any = null;
  accountTypes: any = null;
  emailTypes: any = null;
  successfulRequest = "";
  newServiceID = "";
  commissionTypeLabel = "";

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private serviceAfflService: ServiceAffiliationService,
    private modalityService: ModalityService,
    private commissionsTypeService: CommissionTypeService,
    private bankService: BankService,
    private accountTypeService: AccountTypeService,
    private emailTypeService: EmailTypeService
  ) {
    this.basicInformationForm = this.formBuilder.group({
      companyName: ["EMPRESA PEPITO SAC", [Validators.required, Validators.maxLength(20)]],
      serviceName: ["", [Validators.required, Validators.maxLength(20)]],
      debtorCode: ["", [Validators.required, Validators.maxLength(20)]],
      assignNumberOfDCCharacters: ["", [Validators.required, Validators.maxLength(20)]],
      numberOfDCCharacters: [0, [Validators.pattern(/^\d+$/), Validators.max(20)]],
    });

    this.collectionMethodForm = this.formBuilder.group({
      collectionMethod: ["", [Validators.required]],
      setUpAmountsRange: [""],
      rangeStart: [""],
      rangeEnd: [""],
      forceToPayOlderFee: [""],
      allowToPayOverdueFees: [""],
      allowPartialPayments: [""],
    }, {
       validators: [ this.customValidationCM0_, this.customValidationCM1, this.customValidationCM2_ ]
    });

    this.commissionsForm = this.formBuilder.group({
      typeOfCommission: ["", [Validators.required]],
      amountByCompany: [""],
      amountByCustomer: [""],
      ranges: this.formBuilder.array([
        this.formBuilder.group({
          rangeStart: [0],
          rangeEnd: [999999],
          commissionToTheCompany: [""],
        }),
      ]),
      commissionToPayToTheMER: ["", [Validators.required]],
      percentageForSuperAgent: ["", [Validators.required]],
      customPctForSuperAgent: [""],
    }, {
      validators: [ this.customValidationCOM0, this.customValidationCOM1 ]
    });

    this.paymentAccountForm = this.formBuilder.group({
      bank: ["", [Validators.required]],
      accountType: ["", [Validators.required]],
      accountNumber: ["", [Validators.required, Validators.maxLength(20)]],
      interbankAccountNumber: ["", [Validators.required, Validators.maxLength(20)]],
    });

    this.emailsForm = this.formBuilder.group({
      emailsForSendingResponseFile: this.formBuilder.array([]),
      emailsForTheConfirmationOfTheLoad: this.formBuilder.array([]),
      emailsToSendCredentials: this.formBuilder.array([]),
    });

    this.onChanges();
  }


  customValidationCM0_(control: AbstractControl): ValidationErrors | null {
 
    const setUpAmountsRange = control.get("setUpAmountsRange").value;
    const collectionMethod = control.get("collectionMethod").value;
 
    if( collectionMethod === '1' || collectionMethod === '2' ){
      if ( setUpAmountsRange === "" ) {
        return { customValidationCM0_ : true }
      }
    } 
    return null;
  }

  customValidationCM1(control: AbstractControl): ValidationErrors | null {
    const setUpAmountsRange = control.get("setUpAmountsRange").value;
    const rangeStart = control.get("rangeStart").value;
    const rangeEnd = control.get("rangeEnd").value;
    if( setUpAmountsRange === 'SI' ){
      if ( !/^[01-9]\d*(\.\d+)?$/.test(rangeStart) || !/^[01-9]\d*(\.\d+)?$/.test(rangeEnd) || parseFloat(rangeStart) > parseFloat(rangeEnd) ) {
        return { customValidationCM1 : true }
      }
    }
    return null;
  }

  customValidationCM2_(control: AbstractControl): ValidationErrors | null {
    const collectionMethod = control.get("collectionMethod").value;
    const forceToPayOlderFee = control.get("forceToPayOlderFee").value;
    const allowToPayOverdueFees = control.get("allowToPayOverdueFees").value;
    const allowPartialPayments = control.get("allowPartialPayments").value;

    if( collectionMethod === '3' ){
      if ( forceToPayOlderFee === "" || allowToPayOverdueFees === "" || allowPartialPayments === "" ) {
        return { customValidationCM2_ : true }
      }
    } 
    return null;
  }

  customValidationCOM0(control: AbstractControl): ValidationErrors | null {

    const typeOfCommission = control.get("typeOfCommission").value;
    const amountByCompany = control.get("amountByCompany").value;
    const amountByCustomer = control.get("amountByCustomer").value;
    const commissionToPayToTheMER = control.get("commissionToPayToTheMER").value;
    const ranges = control.get("ranges").value;

    if( typeOfCommission === '1' || typeOfCommission === '2' ){
      if ( !/^[01-9]\d*(\.\d+)?$/.test(amountByCompany) || !/^[01-9]\d*(\.\d+)?$/.test(amountByCustomer) || !/^[01-9]\d*(\.\d+)?$/.test(commissionToPayToTheMER) || parseFloat(commissionToPayToTheMER) > (parseFloat(amountByCompany) + parseFloat(amountByCustomer))  ) {
        return { customValidationCOM0 : true }
      }
    }

    if( typeOfCommission === '3' && ranges.length > 0 ){
      let flag01 = false, flag00 = false, flag02 = false, flag04 = false;
      for(let i=0; i < ranges.length; i++){
        /**  */
        if( !/^[01-9]\d*(\.\d+)?$/.test(ranges[i].commissionToTheCompany) ){
          flag00 = true;
          break;
        }
        if( !/^[01-9]\d*(\.\d+)?$/.test(ranges[i].rangeEnd) || parseFloat(ranges[i].rangeStart) >= parseFloat(ranges[i].rangeEnd) ){ 
          flag01 = true; 
          break;
        }
      }
      let largest = parseFloat(ranges[0].commissionToTheCompany);
      let current = null;
      for(let i=1; i < ranges.length; i++){
        current = parseFloat(ranges[i].commissionToTheCompany)
        if( current >= largest ){
          flag02 = true;
          break;
        }else{
          largest = current;
        }
      }
      flag04 = !/^[01-9]\d*(\.\d+)?$/.test(commissionToPayToTheMER) || parseFloat(commissionToPayToTheMER) >= parseFloat( ranges[ranges.length-1].commissionToTheCompany );
      if( flag00 || flag01 || flag02|| flag04 ){
        return { customValidationCOM0 : true }
      }
    }
    return null;
  }

  customValidationCOM1(control: AbstractControl): ValidationErrors | null{
    const percentageForSuperAgent = control.get("percentageForSuperAgent").value;
    const customPctForSuperAgent = control.get("customPctForSuperAgent").value;
    if( percentageForSuperAgent === '-' ){
      if ( !/^[01-9]\d*(\.\d+)?$/.test(customPctForSuperAgent) || parseFloat(customPctForSuperAgent) >= 100.00 ) {
        return { customValidationCOM1 : true }
      }
    }
    return null;
  }

  rangeEndEnterEvent(value, index){
    if( /^[01-9]\d*(\.\d+)?$/.test(value) ){
      this.tieredCommRanges.at(index+1).patchValue({ rangeStart: parseFloat(value)+1 });
    }
  }

  get tieredCommRanges() {
    return this.commissionsForm.get("ranges") as FormArray;
  }

  get tieredCommRangesLength() {
    return (this.commissionsForm.get("ranges") as FormArray).length;
  }

  get emailsForSendingResponseFile() {
    return this.emailsForm.get("emailsForSendingResponseFile") as FormArray;
  }

  get emailsForTheConfirmationOfTheLoad() {
    return this.emailsForm.get(
      "emailsForTheConfirmationOfTheLoad"
    ) as FormArray;
  }

  get emailsToSendCredentials() {
    return this.emailsForm.get("emailsToSendCredentials") as FormArray;
  }

  addEmailForSendingResponseFile(newEmail: string) {
    if( this.emailsForSendingResponseFile.length <= 2 ){
      if( !/^\S+@\S+$/.test(newEmail) ) return;
      const found = this.emailsForSendingResponseFile.value.find(
        (item) => item.email === newEmail
      );
      if (found) return;
      this.emailsForSendingResponseFile.push(
        this.formBuilder.group({ email: [newEmail] })
      );
    }
  }

  deleteEmailForSendingResponseFile(index) {
    this.emailsForSendingResponseFile.removeAt(index);
  }

  addEmailForTheConfirmationOfTheLoad(newEmail: string) {
    if(this.emailsForTheConfirmationOfTheLoad.length <= 2 ){
      if( !/^\S+@\S+$/.test(newEmail) ) return;
      const found = this.emailsForTheConfirmationOfTheLoad.value.find(
        (item) => item.email === newEmail
      );
      if (found) return;
      this.emailsForTheConfirmationOfTheLoad.push(
        this.formBuilder.group({ email: [newEmail] })
      );
    }
  }

  deleteEmailForTheConfirmationOfTheLoad(index) {
    this.emailsForTheConfirmationOfTheLoad.removeAt(index);
  }

  addEmailToSendCredentials(newEmail: string) {
    if( this.emailsToSendCredentials.length <= 0 ){
      if( !/^\S+@\S+$/.test(newEmail) ) return;
      const found = this.emailsToSendCredentials.value.find(
        (item) => item.email === newEmail
      );
      if (found) return;
      this.emailsToSendCredentials.push(
        this.formBuilder.group({ email: [newEmail] })
      );
    }
  }

  deleteEmailToSendCredentials(index) {
    this.emailsToSendCredentials.removeAt(index);
  }

  addTieredCommRange() {
    if( this.tieredCommRangesLength <= 4){
      this.tieredCommRanges
      .at(this.tieredCommRangesLength - 1)
      .patchValue({ rangeEnd: "" });
      this.tieredCommRanges.push(
        this.formBuilder.group({
          rangeStart: [0],
          rangeEnd: [999999],
          commissionToTheCompany: [null],
        })
      );
    } 
  }

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Afiliación de servicios" },
      { label: "Nuevo servicio", active: true },
    ];
    /** Fetch all needed data inside component, don't access directly from template */
    this.modalities = this.modalityService.getAll();
    this.commissionTypes = this.commissionsTypeService.getAll();
    this.banks = this.bankService.getAll();
    this.accountTypes = this.accountTypeService.getAll()
    this.emailTypes = this.emailTypeService.getAll();
  }

  onChanges(): void {
    this.basicInformationForm
      .get("assignNumberOfDCCharacters")
      .valueChanges.subscribe((val) => {
        if (val !== "SI") {
          this.basicInformationForm.patchValue({
            numberOfDCCharacters: 0,
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
        if (val === "3") {
          this.collectionMethodForm.patchValue({
            forceToPayOlderFee: "",
            allowToPayOverdueFees: "",
            allowPartialPayments: "",
          });
        } else {
          this.collectionMethodForm.patchValue({
            setUpAmountsRange: "",
            rangeStart: "",
            rangeEnd: "",
          });
        }
      });
      
    this.commissionsForm
      .get("typeOfCommission")
      .valueChanges.subscribe((val) => {
        switch (val) {
          case "1": 
            this.commissionTypeLabel = "Monto";
            this.commissionsForm.patchValue({
              amountByCompany: null,
              amountByCustomer: null,
            });
            break;
          case "2":
            this.commissionTypeLabel = "%";
            this.commissionsForm.patchValue({
              amountByCompany: null,
              amountByCustomer: null,
            });
            break;
          case "3":
            this.tieredCommRanges.clear();
            this.tieredCommRanges.push(
              this.formBuilder.group({
                rangeStart: [0],
                rangeEnd: [999999],
                commissionToTheCompany: [null],
              })
            );
            break;
        }
        this.commissionsForm.patchValue({
          commissionToPayToTheMER: "",
          percentageForSuperAgent: "",
          customPctForSuperAgent: "",
        });
      });
    this.commissionsForm
      .get("percentageForSuperAgent")
      .valueChanges.subscribe((val) => { 
        if( val === '-' ){
          this.commissionsForm.patchValue({
            customPctForSuperAgent: ""
          });
        }
       });
    
    this.paymentAccountForm.get("bank").valueChanges.subscribe((val) => {
      this.paymentAccountForm.patchValue({
        accountType: "",
        accountNumber: "",
        interbankAccountNumber: "",
      });
    });
    this.paymentAccountForm.get("accountType").valueChanges.subscribe((val) => {
      this.paymentAccountForm.patchValue({
        accountNumber: "",
        interbankAccountNumber: "",
      });
    });
  }

  enterStepWith(num): void {
    this.currentStepTitle = this.stepTitles[num];
    this.titleService.setTitle(
      "RyS | Nuevo Servicio > " + this.currentStepTitle
    );
  }

  registerNewService() {
    /** --------------------- BASIC INFORMATION --------------------- */
    const basicInformation: any = {};
    basicInformation.empresaId = 1; 
    basicInformation.descripcionServicio =  this.basicInformationForm.value.serviceName;
    basicInformation.codigoDeudor = this.basicInformationForm.value.debtorCode;
    basicInformation.condicionDeudor = this.basicInformationForm.value.assignNumberOfDCCharacters;
    if( basicInformation.condicionDeudor === 'SI' ){
      basicInformation.cantidadDeudorMaximo = this.basicInformationForm.value.numberOfDCCharacters;
    }
    /** --------------------- COLLECTION MODALITY --------------------- */
    const collectionMethod: any = {};
    collectionMethod.modalidadId = this.collectionMethodForm.value.collectionMethod
    if( collectionMethod.modalidadId !== '3' ){
      collectionMethod.condicionRangoMonto = this.collectionMethodForm.value.setUpAmountsRange;
      if( collectionMethod.condicionRangoMonto === 'SI' ){
        collectionMethod.recaudacionDesde = this.collectionMethodForm.value.rangeStart;
        collectionMethod.recaudacionHasta = this.collectionMethodForm.value.rangeEnd;
      }
    }else{
      collectionMethod.pagoCuotaAntiguo = this.collectionMethodForm.value.forceToPayOlderFee
      collectionMethod.pagoCuotaVencida = this.collectionMethodForm.value.allowToPayOverdueFees
      collectionMethod.permitePagoParcial = this.collectionMethodForm.value.allowPartialPayments
    }
    /** --------------------- COMMISSIONS --------------------- */
    const commissions: any = {};
    commissions.tipoComisionId = this.commissionsForm.value.typeOfCommission;
    commissions.montoPagoComercio = this.commissionsForm.value.commissionToPayToTheMER;
    commissions.porcentajeAgente = this.commissionsForm.value.percentageForSuperAgent !== '-' ? this.commissionsForm.value.percentageForSuperAgent : this.commissionsForm.value.customPctForSuperAgent;
    
    if( commissions.tipoComisionId !== '3' ){
      commissions.montoEmpresa = this.commissionsForm.value.amountByCompany;
      commissions.montoCliente = this.commissionsForm.value.amountByCustomer;
    }else{
      commissions.rangoComision = [];
      this.commissionsForm.value.ranges.forEach(element => {
        commissions.rangoComision.push({ 
          rangoComisionInicio: element.rangeStart,
          rangoComisionFin: element.rangeEnd,
          comisionEmpresa: element.commissionToTheCompany
        })
      });
    }
    /** --------------------- PAYMENT ACCOUNT --------------------- */
    const paymentAccount: any = {};
    paymentAccount.bancoId = this.paymentAccountForm.value.bank;
    paymentAccount.tipoCuentaId = this.paymentAccountForm.value.accountType;
    paymentAccount.numeroCuenta = this.paymentAccountForm.value.accountNumber;
    paymentAccount.numeroCci = this.paymentAccountForm.value.interbankAccountNumber;
    /** --------------------- EMAILSS --------------------- */
    const emails : any = [];
    this.emailsForm.value.emailsForSendingResponseFile.forEach(element => {
      emails.push({
        tipoCorreoId: this.emailTypes[0].ID,
        nombreCorreo: element.email
      })
    });
    this.emailsForm.value.emailsForTheConfirmationOfTheLoad.forEach(element => {
      emails.push({
        tipoCorreoId: this.emailTypes[1].ID,
        nombreCorreo: element.email
      })
    });
    this.emailsForm.value.emailsToSendCredentials.forEach(element => {
      emails.push({
        tipoCorreoId: this.emailTypes[2].ID,
        nombreCorreo: element.email
      })
    });
    /** --------------------- ALL DATA --------------------- */
    let newServiceData = {
      informacionBasica: basicInformation,
      servicioModalidad: collectionMethod,
      comision: commissions,
      cuentaAbono: paymentAccount,
      correos: emails
    };
    this.newServiceBtnLoading = true;
    this.serviceAfflService.register(newServiceData).pipe( catchError( this.handleError ) ).subscribe((data: any) => { this.successfulRequest = "YES"; this.newServiceID = data.data.servicioId});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        this.successfulRequest = "NO"
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
