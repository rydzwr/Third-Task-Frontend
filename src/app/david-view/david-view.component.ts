import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NameValidatorResponse } from '../model/NameValidatorResponse';

@Component({
  selector: 'app-david-view',
  templateUrl: './david-view.component.html',
  styleUrls: ['./david-view.component.css']
})
export class DavidViewComponent implements OnInit {
  public message: String | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation)
      this.message = (navigation.extras.state as NameValidatorResponse).content;
  }

  ngOnInit(): void {
  }

}
