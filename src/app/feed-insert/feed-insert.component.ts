import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

import { ApiService } from '../shared/api.service';
import { SessionService } from '../shared/session.service';

@Component({
  selector: 'app-feed-insert',
  templateUrl: './feed-insert.component.html',
  styleUrls: ['./feed-insert.component.css']
})

export class FeedInsertComponent {
  @Output() newFeed: EventEmitter<any> = new EventEmitter();
  isSubmitingFeed = false;

  feedForm = new FormGroup({
    imageLink: new FormControl('', [Validators.pattern('https?://.+')]),
    content: new FormControl('', [Validators.required])
  });

  constructor(private apiService: ApiService, private sessionService: SessionService) { }

  clearForm() {
    this.feedForm.reset();
    this.feedForm.controls.content.setErrors(null);
    this.feedForm.controls.imageLink.setErrors(null);
  }

  getUserLogged() {
    return this.sessionService.getUserLogged();
  }

  onFormSubmit() {
    if (!this.feedForm.invalid) {
      this.isSubmitingFeed = true;
      this.apiService
        .postFeed(this.feedForm.value)
        .subscribe(() => {
          const feed = {
            ...this.feedForm.value,
            user: {
              ...this.getUserLogged()
            },
            date: moment().format('MM/DD/YYYY')
          };
          this.newFeed.emit(feed);
          this.isSubmitingFeed = false;
          this.clearForm();
        });
    }
  }
}
