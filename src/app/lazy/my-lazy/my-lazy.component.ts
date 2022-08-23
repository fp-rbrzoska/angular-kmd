import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/core/test.service';

@Component({
  selector: 'kmd-my-lazy',
  templateUrl: './my-lazy.component.html',
  styleUrls: ['./my-lazy.component.scss']
})
export class MyLazyComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  constructor(private _testService: TestService) {
    _testService.fetchTestJson().then(r => console.log(r))
    this._subscription = _testService.myTest$.subscribe(v => console.log(v))
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this._subscription.unsubscribe()
  }

}
