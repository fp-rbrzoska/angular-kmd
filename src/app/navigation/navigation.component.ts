import { Component, OnInit } from '@angular/core';
import { TestService } from '../core/test.service';

@Component({
  selector: 'kmd-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private _testService: TestService) { }

  ngOnInit(): void {
  }

  changeStream() {
    this._testService.setVal('test')
  }

}
