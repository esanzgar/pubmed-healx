import { Component, OnInit } from "@angular/core";

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
  bookmarks: Bookmark[] = [];
  constructor(private _bookmarks: BookmarksService) {}

  ngOnInit() {}

  addBookmark(pmid: string) {
    // TODO
  }

  removeBookmark(pmid: string) {
    // TODO
  }
}
