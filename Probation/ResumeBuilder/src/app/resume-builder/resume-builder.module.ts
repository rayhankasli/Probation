import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeFormContainerComponent } from './resume-form-container/resume-form-container.component';
import { ResumeFormPresentationComponent } from './resume-form-container/resume-form-presentation/resume-form-presentation.component';
import { ResumeBuilderService } from './resume-builder.service';

@NgModule({
  declarations: [ResumeFormContainerComponent, ResumeFormPresentationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ResumeBuilderRoutingModule
  ],
  providers: [
    ResumeBuilderService
  ]
})
export class ResumeBuilderModule { }
