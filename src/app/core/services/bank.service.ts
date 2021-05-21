import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class BankService {
  constructor(private http: HttpClient) {}

  register(bank: any) {
    return this.http.post(
      `${environment.baseUrl}/recaudacion/banco`,
      bank
    );
  }

  getAll(){
    return [{ ID: 1, NOMBRE: "Interbank"},{ ID: 2, NOMBRE: "BCP"},{ ID: 3, NOMBRE: "BBVA" }, { ID: 4, NOMBRE: "Scotiabank" }];
  }
}
