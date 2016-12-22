import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';

export const MAIN_ROUTES = [
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  declarations: [MainComponent, /*StoryItemComponent*/]
})
export class MainModule { }
