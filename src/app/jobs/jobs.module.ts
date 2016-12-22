import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { SharedModule } from '../shared/shared.module';

export const JOB_ROUTES = [
  { path: '', component: JobsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(JOB_ROUTES)
  ],
  declarations: [
    JobsComponent
  ]
})
export class JobsModule { }
