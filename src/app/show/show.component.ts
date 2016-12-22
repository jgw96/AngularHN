import { Component, OnInit } from '@angular/core';

import { HackernewsService } from '../hackernews.service';
import { StoryItemComponent } from '../story-item/story-item.component';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  stories: any[];
  pageNumber: number;

  constructor(public hackerNews: HackernewsService) { }

  ngOnInit() {
    this.pageNumber = 1;

    this.hackerNews.fetchStories('show', this.pageNumber).subscribe((data) => {
      this.stories = data;
    });
  }

  openStory(id: string) {
    this.hackerNews.fetchItem(id).subscribe((data) => {
      console.log(data);
    });
  }

}
