/**
 * For adding new Job Posts, 
 * uses loadJsonService for posting data to aws/google cloud.
 */

import { Component } from '@angular/core';
import { LoadJsonService } from '../services/load-json.service';

@Component({
  selector: 'jp-add-new-job-post',
  templateUrl: './add-new-job-post.component.html',
  styleUrls: ['./add-new-job-post.component.css']
})
export class AddNewJobPostComponent {

  public role: string;
  public companyID: string;
  public description: string;
  public keySkills: string;
  public experiance: number;
  public location: string;
  public salary: number;
  public jobLink: string;
  public jobType: string;
  public showForm: boolean = false;
  public salaryCtc: string;

  constructor(private _loadJsonService: LoadJsonService) { }

  submitForm(e: Event) {
    e.preventDefault();
  }

  postNewJob() {
    this._loadJsonService.postData(this.role, this.companyID, this.description, this.keySkills, this.experiance + "", this.location, this.salaryCtc + "", this.jobLink, this.jobType).subscribe((data) => {
    });
  }

}
