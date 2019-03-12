import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, pluck } from "rxjs/operators";

import { User } from "../auth/shared/services/auth.service";

export interface Store {
  user: User | null;
}

const state: Store = {
  user: null
};

@Injectable({
  providedIn: "root"
})
export class StoreService {
  private _state = new BehaviorSubject<Store>(state);
  private _store = this._state.asObservable().pipe(distinctUntilChanged());

  constructor() {}

  get state(): Store {
    return this._state.value;
  }

  set<P extends keyof Store>(prop: P, newState: Store[P]): void {
    this._state.next({ ...this.state, [prop]: newState });
  }

  select<P extends keyof Store>(prop: P): Observable<Store[P]> {
    return this._store.pipe(pluck(prop));
  }
}
