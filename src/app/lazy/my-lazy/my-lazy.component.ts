import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/core/test.service';

@Component({
  selector: 'kmd-my-lazy',
  templateUrl: './my-lazy.component.html',
  styleUrls: ['./my-lazy.component.scss']
})
export class MyLazyComponent implements OnInit {

  constructor(private _testService: TestService) { }

  ngOnInit(): void {
  }

}
