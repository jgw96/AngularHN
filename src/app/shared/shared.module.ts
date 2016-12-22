import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoryItemComponent } from '../story-item/story-item.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [StoryItemComponent],
  exports: [StoryItemComponent, CommonModule]
})
export class SharedModule { }
