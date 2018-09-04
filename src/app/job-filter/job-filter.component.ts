import { Component, Output, EventEmitter } from '@angular/core';
import { EXP } from '../app.component';

/**
 * Provides form for filtering based on role, location and experiance
 * Outputs role, experiance and location states
 */
@Component({
  selector: 'jp-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.css']
})
export class JobFilterComponent {

  @Output() filterRole: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterExperiance: EventEmitter<EXP> = new EventEmitter<EXP>();
  @Output() filterLocation: EventEmitter<string> = new EventEmitter<string>();

  public searchRole: string = "";
  public searchLocation: string = "";
  public searchFrom: number;
  public searchTo: number;
  public showForm: boolean = false;

  submitForm(e) {
    e.preventDefault();
  }

  onSearch() {
    this.filterRole.emit(this.searchRole);
    this.filterExperiance.emit({ sf: this.searchFrom, st: this.searchTo });
    this.filterLocation.emit(this.searchLocation);
  }

  onReset() {
    this.filterRole.emit("");
    this.filterExperiance.emit(null);
    this.filterLocation.emit("");
  }
}
