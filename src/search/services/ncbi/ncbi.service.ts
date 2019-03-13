import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";

export interface Header {
  type: string;
  version: string;
}

export interface Esearchresult {
  count: string;
  retmax: string;
  retstart: string;
  idlist: string[];
  translationset: any[];
  translationstack: any[];
  querytranslation: string;
}

export interface NcbiSearchResponse {
  header: Header;
  esearchresult: Esearchresult;
}

@Injectable({
  providedIn: "root"
})
export class NcbiService {
  private readonly _database = "pubmed";
  private readonly _responseType = "json";
  private readonly _searchUrl = `${environment.ncbiUrl}/esearch.fcgi?db=${
    this._database
  }&retmode=${this._responseType}`;
  private readonly _summaryUrl = `${environment.ncbiUrl}/esummary.fcgi?db=${
    this._database
  }&retmode=${this._responseType}`;

  constructor(private _http: HttpClient) {}

  search(query: string) {
    return this._http.get<NcbiSearchResponse>(
      `${this._searchUrl}&retmax=20&term=${query}`
    );
  }

  summary(ids: string[]) {
    // return this._http.get<NcbiSummaryResponse>(`${this._summaryUrl}&id=${ids.join(',')}`);
    return this._http.get(`${this._summaryUrl}&id=${ids.join(",")}`);
  }
}
