import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [RouterLink, MatButtonModule],
})
export class LandingPageComponent implements OnInit {
  constructor() {
    const tab: any = '';

    if (tab) {
      console.log('siema');
    }
  }

  ngOnInit() {}
}
