import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { tap, filter } from "rxjs/operators";

import {
  BookmarksService,
  Bookmark
} from "../../services/bookmarks/bookmarks.service";

import { faFile } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "pubmed-reading-list",
  templateUrl: "./reading-list.component.html",
  styleUrls: ["./reading-list.component.css"]
})
export class ReadingListComponent implements OnInit, OnDestroy {
  faFile = faFile;
  bookmarks: Bookmark[] = [];
  private _subcriptions: Subscription[] = [];
  private _bookmarks$: Observable<Bookmark[]> = this._bookmarksService
    .bookmarks;

  constructor(
    private _bookmarksService: BookmarksService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    // If URL contains an id then save it
    const sub1 = this._route.params
      .pipe(
        filter(param => Boolean(param.id)),
        tap(param => this.addBookmark(param.id)),
        tap(_ => this._router.navigate(["/reader"]))
      )
      .subscribe();
    const sub2 = this._bookmarks$.subscribe(data => (this.bookmarks = data));
    this._subcriptions = [sub1, sub2];
  }

  ngOnDestroy() {
    this._subcriptions.forEach(sub => sub.unsubscribe());
  }

  async addBookmark(pmid: string) {
    await this._bookmarksService.add(pmid);
  }

  async removeBookmark(key: string) {
    await this._bookmarksService.remove(key);
  }
}
