import { TestBed, async, inject } from "@angular/core/testing";

import { UserAuthenticatedGuard } from "./user-authenticated.guard";

xdescribe("UserAuthenticatedGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthenticatedGuard]
    });
  });

  it("should ...", inject(
    [UserAuthenticatedGuard],
    (guard: UserAuthenticatedGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
