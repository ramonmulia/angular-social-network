import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedInsertComponent } from './feed-insert.component';

describe('FeedInsertComponent', () => {
  let component: FeedInsertComponent;
  let fixture: ComponentFixture<FeedInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
