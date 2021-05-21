import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class EmailTypeService {
  constructor(private http: HttpClient) {}

  register(emailType: any) {
    return this.http.post(
      `${environment.baseUrl}/recaudacion/tipo-correo`,
      emailType
    );
  }

  getAll(){
    return [{ ID: 1, NOMBRE: "CORREO_ARCHIVO_RESPUESTA"},{ ID: 2, NOMBRE: "CORREO_CONFIRMACION_CARGA"}, { ID: 3, NOMBRE: "CORREO_CREDENCIALES"}];
  }
}
