import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";

export interface EpmcRequest {
  query: string;
  resultType: string;
  synonym: boolean;
  cursorMark: string;
  pageSize: number;
  sort: string;
}

export interface EpmcResult {
  id: string;
  source: string;
  pmid: string;
  pmcid: string;
}

export interface EpmcResultList {
  result: EpmcResult[];
}

export interface EpmcResponse {
  version: string;
  hitCount: number;
  nextCursorMark: string;
  request: EpmcRequest;
  resultList: EpmcResultList;
}

@Injectable({
  providedIn: "root"
})
export class EpmcService {
  constructor(private _http: HttpClient) {}

  search(query: string, cursor = "") {
    const cleanQuery = query.replace(" ", "+");
    return this._http.get<EpmcResponse>(
      `${
        environment.epmcUrl
      }?format=json&resultType=idlist&cursorMark=${cursor}&query=${cleanQuery}`
    );
  }
}
