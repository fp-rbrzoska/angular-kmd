import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, from, map, Observable, of, tap } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TestService {

  prom =  new Promise((res, rej)  =>
    setTimeout(() => res('the end'), 5000)
  )
  // obs$ = new Observable((obs) => {
  //   obs.next(1)
  //   obs.next(2)
  //   obs.next(3)
  //   obs.next(4)
  // })
  obs$ = from([1,2,3,4]);
  private _myTestSubj = new Subject();
  myTest$ = this._myTestSubj.asObservable()

  constructor() {
    console.log('init test service');

    this._myTestSubj.next('a')
    this._myTestSubj.next('b')
    this._myTestSubj.subscribe(v => console.log(v))
    this._myTestSubj.next('c')

    this.obs$.pipe(
      filter(v => v > 1),
      tap(v => console.log(' after filter: ', v)),
      map(v => v * 2),
    ).subscribe(v => console.log(v))
   }

   fetchTestJson(): Promise<any> {
    return fetch('/assets/test.json')
   }

   setVal(v: any) {
    this._myTestSubj.next(v)
   }
}
