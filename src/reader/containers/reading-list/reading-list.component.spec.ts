import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../../material/material.module';

import { BookmarksService } from '../../services/bookmarks/bookmarks.service';

import { ReadingListComponent } from './reading-list.component';

// TODO: create db mock class

xdescribe('ReadingListComponent', () => {
  let component: ReadingListComponent;
  let fixture: ComponentFixture<ReadingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReadingListComponent],
      imports: [NoopAnimationsModule, MaterialModule],
      providers: [BookmarksService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
