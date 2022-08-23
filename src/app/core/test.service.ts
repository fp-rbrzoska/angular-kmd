import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';
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
  private _bSubj = new BehaviorSubject(0);
  myTest$ = this._myTestSubj.asObservable()

  constructor() {

    //this._myTestSubj.pipe(switchMap(v1 => fetchSecondData())).subscribe(v2 => .....)
    // console.log('init test service');
    // console.log(this._bSubj.value)

    // this._myTestSubj.next('a')
    // this._myTestSubj.next('b')
    // this._myTestSubj.subscribe(v => console.log(v))
    // this._myTestSubj.next('c')
    // this._bSubj.next(11)
    // this._bSubj.next(111)
    // this._bSubj.subscribe(v => console.log(v))
    // this._bSubj.next(1111)
    // this.obs$.pipe(
    //   filter(v => v > 1),
    //   tap(v => console.log(' after filter: ', v)),
    //   map(v => v * 2),
    // ).subscribe(v => console.log(v))
   }

   fetchTestJson(): Promise<any> {
    return fetch('/assets/test.json')
   }

   setVal(v: any) {
    this._myTestSubj.next(v)
   }
}
