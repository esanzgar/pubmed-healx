import { TestBed } from '@angular/core/testing';

// Replace these imports by a mockup service class
import { AngularFireDatabase } from '@angular/fire/database';

import { BookmarksService } from './bookmarks.service';

xdescribe('BookmarksService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AngularFireDatabase]
    })
  );

  it('should be created', () => {
    const service: BookmarksService = TestBed.get(BookmarksService);
    expect(service).toBeTruthy();
  });
});
