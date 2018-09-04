import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/joblist-model';

/**
 * Render input data as a rwo (A job post).
 */
@Component({
  selector: 'jp-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css']
})
export class JobPostingComponent {

  @Input('jobData') public jobPost: Job;

  public show: boolean = false;
  public showApplied: boolean = false;
  public starred: boolean = false;

  star(event: Event) {
    event.stopPropagation();
    this.starred = !this.starred;
  }

  apply() {
    this.showApplied = !this.showApplied;
  }

}
