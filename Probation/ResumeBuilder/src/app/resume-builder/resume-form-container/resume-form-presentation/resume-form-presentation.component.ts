/** 
 * @author Rayhan Kasli
 * @description a dumb component used for contain ui part
 */
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { ResumeFormPresenter } from '../resume-form-presenter/resume-form-presenter';
import { ResumeBuilder } from '../../resume-builder.model';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-resume-form-presentation-ui',
  templateUrl: './resume-form-presentation.component.html',
  styleUrls: ['./resume-form-presentation.component.scss'],
  viewProviders: [ResumeFormPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeFormPresentationComponent implements OnInit, OnDestroy {

  /**
   * Sets input
   */
  @Input() set resume(value: ResumeBuilder) {
    this._resumeBuilder = value;
    if (value) {
      this.resumeForm = this.resumeFormPresenter.bindControlValue(this.resumeForm, this.resume);
    }
  }

  get resume(): ResumeBuilder {
    return this._resumeBuilder;
  }


  /**
   * Output  of resume form presentation component
   */
  @Output() add: EventEmitter<ResumeBuilder>;

  /**
   * Resume form of resume form presentation component
   */
  public resumeForm: FormGroup;
  /**
   * Skills  of resume form presentation component
   */
  public skills = [{ skill: 'UI' }, { skill: 'Angular' }, { skill: 'Java' }];
  /**
   * Destroy  of resume form presentation component
   */
  private destroy: Subject<void>;
  /**
   * Resume builder of resume form presentation component
   */
  private _resumeBuilder: ResumeBuilder;

  constructor(private resumeFormPresenter: ResumeFormPresenter) {
    this.add = new EventEmitter();
    this.destroy = new Subject();
    this.resumeForm = this.resumeFormPresenter.buildForm();
   }

  ngOnInit() {
    this.resumeFormPresenter.add$.pipe(takeUntil(this.destroy)).subscribe((resumeBuilder: ResumeBuilder) => {
      if (resumeBuilder) {
        this.add.emit(resumeBuilder);
      }
    });
  }
 

 
  public change(): void {
    const invalid = [];
    const controls = this.resumeForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
           invalid.push(name);
         }
      }
    console.log('Invalid', invalid);
  }

  

  /**
   * responsible for call presenter to stores the data
   */
  public resumeBuilder(): void {
    this.resumeFormPresenter.saveResumeFile(this.resumeForm);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
