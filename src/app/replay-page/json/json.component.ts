import {Component, OnInit} from '@angular/core';
import {Video} from '../../globals';

declare let jQuery: any;
declare let Terminal: any;

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  Video = Video;

  constructor() {
  }

  ngOnInit() {
    const term = new Terminal({
      cols: '80',
      rows: '24',
      useStyle: true,
      screenKeys: true,
    });
    term.open(document.getElementById('term'), true);
  }

}