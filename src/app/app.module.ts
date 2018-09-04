import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GlobalAppHeaderComponent } from './global-app-header/global-app-header.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { SearchRolePipe } from './pipes/search-role.pipe';
import { FormsModule } from '@angular/forms';
import { SearchLocPipe } from './pipes/search-loc.pipe';
import { SearchExpPipe } from './pipes/search-exp.pipe';
import { AddNewJobPostComponent } from './add-new-job-post/add-new-job-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LoadJsonService } from './services/load-json.service';

@NgModule({
  declarations: [
    AppComponent,
    GlobalAppHeaderComponent,
    JobPostingComponent,
    JobFilterComponent,
    SearchRolePipe,
    SearchLocPipe,
    SearchExpPipe,
    AddNewJobPostComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ LoadJsonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
