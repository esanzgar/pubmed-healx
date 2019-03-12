import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";

export interface Bookmark {
  pubmid: string;
  $key: string;
}

@Injectable({
  providedIn: "root"
})
export class BookmarksService {
  private _bookmarks$ = this._db.list<Bookmark>(`bookmarks`).valueChanges();

  get bookmarks() {
    return this._bookmarks$;
  }

  constructor(private _db: AngularFireDatabase) {}

  add(pubmed: string) {
    return this._db.list(`bookmarks`).push(pubmed);
  }

  remove(key: string) {
    return this._db.list(`bookmarks`).remove(key);
  }
}
