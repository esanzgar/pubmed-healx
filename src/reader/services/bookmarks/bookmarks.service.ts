import { Injectable } from "@angular/core";

export interface Bookmark {
  pubmid: string;
  $key: string;
}

@Injectable({
  providedIn: "root"
})
export class BookmarksService {
  constructor() {}

  add(pubmed: string) {
    // TODO
  }

  remove($key: string) {
    // TODO
  }
}
