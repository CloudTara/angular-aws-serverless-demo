import { Pipe, PipeTransform } from '@angular/core';
import { Job } from 'src/app/models/joblist-model';
@Pipe({
  name: 'searchLoc'
})
export class SearchLocPipe implements PipeTransform {

  transform(jobItems: Job[], searchLoc: string): Job[] {
    if(!jobItems){
      return [];
    } 
      
    if(!searchLoc) {
      return jobItems;
    }
      
    let _searchLoc = searchLoc.toLowerCase();
    return jobItems.filter( job => job.loc.toLowerCase().includes(_searchLoc));
  }
}
