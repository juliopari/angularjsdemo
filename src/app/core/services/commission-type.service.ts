import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class CommissionTypeService {
  constructor(private http: HttpClient) {}

  register(commissionType: any) {
    return this.http.post(
      `${environment.baseUrl}/recaudacion/tipo-comision`,
      commissionType
    );
  }

  getAll(){
    return [{ ID: 1, DESCRIPCION: "Fija"},{ ID: 2, DESCRIPCION: "Porcentual"},{ ID: 3, DESCRIPCION: "Escalonada" }];
  }
}
