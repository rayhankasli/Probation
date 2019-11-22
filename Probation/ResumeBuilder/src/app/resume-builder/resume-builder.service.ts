/** 
 * @author Rayhan Kasli
 * @description service handle http call with server
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResumeBuilder } from './resume-builder.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeBuilderService {

  /** serviceUrl used to set service url */
  public serviceUrl = 'http://localhost:3000/';

  /**
   * Creates an instance of resume builder service.
   * @param httpClient inject HttpClient for handel server calls
   */
  constructor(private httpClient: HttpClient) { }


  /**
   * Create a new resume using post method of http client
   */
  public createResume(resumeBuilder: ResumeBuilder): Observable<ResumeBuilder> {
    return this.httpClient.post<ResumeBuilder>(`${this.serviceUrl + 'resumeBuilder'}`, resumeBuilder);
  }

  /**
   * Gets resume by id
   * @param id contain id
   * @returns resume by id 
   */
  public getResumeById(id: string): Observable<ResumeBuilder> {
    return this.httpClient.get<ResumeBuilder>(this.serviceUrl + 'resumeBuilder/' + id);
  }

}
