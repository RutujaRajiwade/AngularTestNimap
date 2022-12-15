import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  homeUrl = false;

  constructor(private router: Router) {
    router.events.subscribe((url: any) => {
      // console.log(router.url)
      if (router.url === '/home') {
        this.homeUrl = true
      } else {
        this.homeUrl = false
      }
    });
  }

  ngOnInit(): void {
  }

}
