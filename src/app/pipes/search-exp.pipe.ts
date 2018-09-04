import { Pipe, PipeTransform } from '@angular/core';
import { Job } from 'src/app/models/joblist-model';
import { EXP } from '../app.component';
@Pipe({
  name: 'searchExp'
})
export class SearchExpPipe implements PipeTransform {

  transform(jobItems: Job[], exp:EXP): Job[]{
    if(!jobItems) {
      return [];
    }

    if(!exp) {
      return jobItems;
    }

    let filter_list: Job[] = jobItems;

    if (exp.sf) {
      filter_list = filter_list.filter(job => job.exp >= exp.sf);
    } 
    
    if (exp.st) {
      filter_list = filter_list.filter(job =>  job.exp <= exp.st);
    }

    return  filter_list;
  }
}
