import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainModule, MAIN_ROUTES } from './main/main.module';

import { HackernewsService } from './hackernews.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    RouterModule.forRoot([
      ...MAIN_ROUTES,
      { path: 'comments', loadChildren: './comment-page/comment-page.module#CommentPageModule' },
      { path: 'jobs', loadChildren: './jobs/jobs.module#JobsModule' },
      { path: 'show', loadChildren: './show/show.module#ShowModule' }
    ])
  ],
  providers: [HackernewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
