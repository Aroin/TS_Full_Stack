import { AppConfig } from './app.config';
import {Component, OnInit} from '@angular/core';
/**
 * Created by h4mit on 27/08/2017.
 */

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  constructor(private config: AppConfig) {
  }

  ngOnInit(): void {
    const title: any = document.getElementsByTagName('title')[0];
    title.innerHTML = this.config.get('TITLE');
  }
}
