import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class ModalityService {
  constructor(private http: HttpClient) {}

  register(modality: any) {
    return this.http.post(
      `${environment.baseUrl}/recaudacion/modalidad`,
      modality
    );
  }

  getAll(){
    return [{ ID: 1, NOMBRE: "Sin data"},{ ID: 2, NOMBRE: "Data parcial"},{ ID: 3, NOMBRE: "Data completa" }];
  }
}
