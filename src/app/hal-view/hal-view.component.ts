import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NameValidatorResponse } from '../model/NameValidatorResponse';

@Component({
  selector: 'app-hal-view',
  templateUrl: './hal-view.component.html',
  styleUrls: ['./hal-view.component.css']
})
export class HalViewComponent implements OnInit {

  public message: String | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation)
      this.message = (navigation.extras.state as NameValidatorResponse).content;
  }

  ngOnInit(): void {
  }

}
