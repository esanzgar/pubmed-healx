import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import {
  BookmarksService,
  Bookmark
} from '../../services/bookmarks/bookmarks.service';

import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pubmed-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit, OnDestroy {
  faFile = faFile;
  bookmarks$: Observable<Bookmark[]> = this._bookmarksService.bookmarks;
  private _subcription!: Subscription;

  constructor(
    private _bookmarksService: BookmarksService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    // If URL contains an id then save pmid
    this._subcription = this._route.params
      .pipe(
        filter(param => Boolean(param.id)),
        tap(param => this.addBookmark(param.id)),
        tap(_ => this._router.navigate(['/reader']))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this._subcription.unsubscribe();
  }

  async addBookmark(pmid: string) {
    await this._bookmarksService.add(pmid);
  }

  async removeBookmark(key: string) {
    await this._bookmarksService.remove(key);
  }
}
