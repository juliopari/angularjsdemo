import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class ServiceAffiliationService {
  constructor(private http: HttpClient) {}

  register(service: any) {
    return this.http.post(
      `${environment.baseUrl}/recaudacion/servicio`,
      service
    );
  }
}
