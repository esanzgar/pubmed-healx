import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";

import {
  BookmarksService,
  Bookmark
} from "../../services/bookmarks/bookmarks.service";

@Component({
  selector: "pubmed-reading-list",
  templateUrl: "./reading-list.component.html",
  styleUrls: ["./reading-list.component.css"]
})
export class ReadingListComponent implements OnInit {
  bookmarks$: Observable<Bookmark[]> = this._bookmarksService.bookmarks;

  constructor(private _bookmarksService: BookmarksService) {}

  ngOnInit() {}

  async addBookmark(pmid: string) {
    await this._bookmarksService.add(pmid);
  }

  async removeBookmark(key: string) {
    await this._bookmarksService.remove(key);
  }
}
