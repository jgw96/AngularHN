import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent implements OnInit {

  @Input() item: any;
  title: string;
  timeAgo: string;
  domain: string;
  user: string;
  id: string;
  url: string;

  constructor() { }

  ngOnInit() {
    console.log(this.item);
    this.title = this.item.title;
    this.timeAgo = this.item.time_ago;
    this.domain = this.item.domain;
    this.user = this.item.user;
    this.id = this.item.id;
    this.url = this.item.url;
  }

  open() {
    window.open(this.url);
  }

}
