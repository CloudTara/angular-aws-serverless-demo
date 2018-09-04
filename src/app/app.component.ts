import { Component, Input, OnInit } from '@angular/core';
import { LoadJsonService } from './services/load-json.service';
import { Job } from 'src/app/models/joblist-model';

export type EXP = {
  sf: number,
  st: number
}

/**
 * Root component for Application
 * Shows placeholder while data being loaded
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public jobList: Job[];
  public searchRole: string = "";
  public searchLocation: string = "";
  public searchExperiance: EXP;
  public placeHolders: number[];

  public showJobFilter: boolean = false;
  public isCookieSet: boolean;

  constructor(private _loadJsonService: LoadJsonService) { }

  ngOnInit() {
    this.placeHolders = Array(15).fill(1);
    this._loadJsonService.getData().subscribe((data) => {
      this.jobList = data["Items"];
    });
  }

}
