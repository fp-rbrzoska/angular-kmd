import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GlobalService } from './core/global.service';

@Component({
  selector: 'kmd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-kmd';

  loader$: Observable<boolean>
  constructor(private _globalService: GlobalService) {
    this.loader$ = _globalService.loader$;
  }
}
