/** @author Rayhan Kasli
 *  @description responsible for server calls
 */

import { Component, OnInit } from '@angular/core';
import { ResumeBuilder } from '../resume-builder.model';
import { ResumeBuilderService } from '../resume-builder.service';
import { ToastrService } from 'ngx-toastr';
import { filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
/**
 * Component
 */
@Component({
  selector: 'app-resume-form-container',
  templateUrl: './resume-form-container.component.html',
  styleUrls: ['./resume-form-container.component.scss']
})
export class ResumeFormContainerComponent implements OnInit {

  /**
   * Resume$  of resume form container component
   */
  public resume$: Observable<ResumeBuilder> = this.route.paramMap.pipe(
    filter(params => params.has('id')),
    switchMap(params => this.resumeBuilderService.getResumeById(params.get('id'))),
  );


  /**
   * Creates an instance of resume form container component.
   * @param resumeBuilderService inject service
   * @param route inject ActivatedRoute service
   * @param toastr inject ToastrService service
   */
  constructor(private resumeBuilderService: ResumeBuilderService, private route: ActivatedRoute , private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * addResume add resume
   * @param resume contain resume builder data
   */
  public addResume(resume: ResumeBuilder): void {
    this.resumeBuilderService.createResume(resume).subscribe(response => {
      if (response) {
        this.toastr.success('Resume Build Successfully', 'Success');
      }
    });
  }

}
