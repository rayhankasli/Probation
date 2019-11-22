/**
 *  @author Rayhan Kasli
 *  @description Contain business logic
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ResumeBuilder } from '../../resume-builder.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateFile, Validatecharacters } from 'src/app/validators/validation';

@Injectable()
export class ResumeFormPresenter {

    /** This is used for subscribing the value of subject add */
    public add$: Observable<ResumeBuilder>;
    /** This is used for add camelCaseModelName object */
    private add: Subject<ResumeBuilder> = new Subject();


    constructor(private fb: FormBuilder) {
        this.add$ = this.add.asObservable();
    }

    /**
     * Builds form
     * @returns form formbuild
     */
    public buildForm(): FormGroup {
        return this.fb.group({
            id: [''],
            name: ['', Validators.compose([Validators.required, Validators.maxLength(30) , Validatecharacters])],
            gender: ['', Validators.compose([Validators.required])],
            address: ['', Validators.compose([Validators.required, Validators.maxLength(200)])],
            contactno: ['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10})$/)])],
            dateOfBirth: ['', Validators.compose([Validators.required])],
            nationality: ['', Validators.compose([Validators.required])],
            education: ['', Validators.compose([Validators.required])],
            skills: ['', Validators.compose([Validators.required])],
            yearsOfExperince: ['', Validators.compose([Validators.required])],
            resume: ['', Validators.compose([Validators.required, validateFile])],

        });

    }


    /**
     * Saves resume file
     * @param resumeForm data
     */
    public saveResumeFile(resumeForm: FormGroup): void {
        if (resumeForm.valid) {
            let resumeBuilder: ResumeBuilder = new ResumeBuilder();
            resumeBuilder = resumeForm.getRawValue();
            this.add.next(resumeBuilder);
        } else {
        }
    }

    /**
     * Binds control value
     * @param resumeForm 
     * @param resumeBuilder 
     * @returns control value 
     */
    public bindControlValue(resumeForm: FormGroup, resumeBuilder: ResumeBuilder): FormGroup {
        if (resumeBuilder) {
            resumeForm.patchValue(resumeBuilder);
        }
        return resumeForm;
    }
}
