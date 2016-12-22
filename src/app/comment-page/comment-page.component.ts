import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HackernewsService } from '../hackernews.service';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {

  comments: any[];
  noComments: boolean;

  constructor(
    private route: ActivatedRoute,
    private hackerNews: HackernewsService,
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.hackerNews.fetchItem(params['id']).subscribe((data) => {
        console.log(data);
        if (data.comments_count === 0) {
          this.noComments = true;
        } else {
          this.noComments = false;
        };
        this.comments = data.comments;
      });
    });
  }

  back() {
    this.location.back();
  }

}
