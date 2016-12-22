import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

export const SHOW_ROUTES = [
  { path: '', component: ShowComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(SHOW_ROUTES)
  ],
  declarations: [ShowComponent]
})
export class ShowModule { }
