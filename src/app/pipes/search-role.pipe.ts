import { Pipe, PipeTransform } from '@angular/core';
import { Job } from 'src/app/models/joblist-model';
@Pipe({
  name: 'searchRole'
})
export class SearchRolePipe implements PipeTransform {

  transform(jobItems: Job[], searchRole: string): Job[] {
    
    if(!jobItems){
      return [];
    } 
    if(!searchRole){
      return jobItems;
    }
    let _searchRole = searchRole.toLowerCase();
    
    return jobItems.filter( job => job.role.toLowerCase().includes(_searchRole));
  }
}
