import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommentPageComponent } from './comment-page.component';

export const COMMENT_ROUTES = [
  { path: ':id', component: CommentPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(COMMENT_ROUTES)
  ],
  declarations: [CommentPageComponent]
})
export class CommentPageModule { }
