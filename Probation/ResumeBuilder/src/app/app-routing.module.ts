import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'resume-builder',
    pathMatch: 'full',
  },
  {
      path: 'resume-builder',
      loadChildren: './resume-builder/resume-builder.module#ResumeBuilderModule',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
