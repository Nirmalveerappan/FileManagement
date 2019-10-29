import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routepaths } from './environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(protected router: Router) {

  }

  ngOnInit(): void {
    // Redirecting to template choose component
    this.router.navigateByUrl(routepaths.chooseCSV);
  }


}
