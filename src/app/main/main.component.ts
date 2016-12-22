import { Component, OnInit } from '@angular/core';

import { HackernewsService } from '../hackernews.service';
import { StoryItemComponent } from '../story-item/story-item.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  stories: any[];
  pageNumber: number;
  loading: boolean;

  constructor(public hackerNews: HackernewsService) { }

  ngOnInit() {
    this.pageNumber = 1;
    this.loading = true;

    this.hackerNews.fetchStories('news', this.pageNumber).subscribe((data) => {
      this.stories = data;
      this.loading = false;
    });
  }

  openStory(id: string) {
    this.hackerNews.fetchItem(id).subscribe((data) => {
      console.log(data);
    });
  }

  moreStories() {
    this.pageNumber = ++this.pageNumber;
    console.log(this.pageNumber);
    this.hackerNews.fetchStories('news', this.pageNumber).subscribe((data) => {
      let newArray = this.stories.concat(data);
      this.stories = newArray;
      console.log(this.stories.length);
    });
  }

}
