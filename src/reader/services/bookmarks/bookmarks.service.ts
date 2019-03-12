import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Bookmark {
  pmid: string;
  $key: string | null;
}

@Injectable({
  providedIn: "root"
})
export class BookmarksService {
  private _bookmarks$: Observable<Bookmark[]> = this._db
    .list<string>(`bookmarks`)
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(
          item =>
            ({ pmid: item.payload.val(), $key: item.payload.key } as Bookmark)
        )
      )
    );

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
