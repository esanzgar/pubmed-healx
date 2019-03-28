import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { tap, take, concatMap } from 'rxjs/operators';

import * as epmc from 'epmc';

import {
  EpmcService,
  EpmcResult,
  EpmcResponse
} from '../../services/epmc/epmc.service';
import { NcbiService } from '../../services/ncbi/ncbi.service';

@Component({
  selector: 'pubmed-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  form = this.fb.group({
    terms: [null, Validators.required]
  });

  waiting = false;
  response: EpmcResponse | null = null;
  articles: EpmcResult[] = [];

  private readonly epmcConfiguration = {
    source: 'MED',
    displayStyle: 'FULL_STYLE',
    elementOrder: 'TITLE_FIRST',
    showAbstract: true
  };

  constructor(
    private fb: FormBuilder,
    private _epmc: EpmcService,
    private _ncbi: NcbiService,
    private _ngZone: NgZone
  ) {}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this._resetState();
    const termsControl = this.form.get('terms') as FormControl;

    this._ncbi
      .search(termsControl.value)
      .pipe(
        concatMap(searchResponse =>
          this._ncbi.summary(searchResponse.esearchresult.idlist)
        )
      )
      .subscribe();

    this._epmc
      .search(termsControl.value)
      .pipe(
        take(1),
        tap(response => {
          this.response = response;
          this.articles = response.resultList.result;
        }),
        tap(response => {
          this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              this.articles.forEach((citation, index) => {
                new epmc.Citation({
                  target: `record-${index}`,
                  citation_id: citation.pmid,
                  width: '100%',
                  ...this.epmcConfiguration
                }).load();
                return;
              });
            }, 0);
          });
        }),
        tap(_ => (this.waiting = false))
      )
      .subscribe();
  }

  private _resetState() {
    this.waiting = false;
    this.response = null;
    this.articles = [];
  }
}
