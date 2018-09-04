/**
 * Connects app with Cloud Backend using API_URL
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/app-config';

@Injectable()
export class LoadJsonService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(API_URL);
  }

  postData(role: string, companyId: string, description: string, keySkills: string, exp: string, loc: string, salaryCtc: string, jobLink: string, jobType: string): Observable<any> {
    return this.http.post(API_URL, {
      "role": role,
      "companyID": companyId,
      "description": description,
      "keySkills": [
        {
          "S": keySkills
        }
      ],
      "exp": exp,
      "loc": loc,
      "salaryCtc": salaryCtc,
      "jobLink": jobLink,
      "jobType": jobType
    });
  }
}
