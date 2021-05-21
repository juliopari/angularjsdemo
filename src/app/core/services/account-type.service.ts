import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class AccountTypeService {
  constructor(private http: HttpClient) {}

  register(at: any) {
    return this.http.post(
      `${environment.baseUrl}/recaudacion/tipo-cuenta`,
      at
    );
  }

  getAll(){
    return [{ ID: 1, NOMBRE: "Corriente"},{ ID: 2, NOMBRE: "Ahorros"}];
  }
}
